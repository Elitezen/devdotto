import { DevDotToErrorResponse, FinalPageFetchOptions, PostOptions } from "../typings/interfaces";
import { EndPoint, StringIndex } from "../typings/types";
import DevDotToError from "./DevDotToError";

const DevDotToUtil = {
  camelCaseKeys: function <T extends object>(obj:object):T {
    if (obj === undefined) throw new TypeError('A valid object must be provided'); 

    let newObj = {} as any;
    const entries = Object.entries(obj);
    entries.forEach(ent => {
      let [key, value] = ent;

      if (key.includes('_')) {
        key = key
          .split('_')
          .map((str, i) => {
            if (i === 0) return key.split('_')[0];
            return str[0].toUpperCase() + str.slice(1);
          })
          .join('');
      }

      newObj[key] = this.isObject(value) ? this.camelCaseKeys(value) : value;
    });

    return newObj as T;
  },

  isObject(arg:unknown):boolean {
    return typeof arg == 'object' && arg !== null && !Array.isArray(arg);
  },

  parseParameters(options?:object):string {
    let params = '';
  
    if (options) {
      const parsedOptions = DevDotToUtil.snakeCaseKeys<
        StringIndex<FinalPageFetchOptions>
      >(options);
  
      params += new URLSearchParams(parsedOptions).toString();
    }
  
    return params ? `?${params}` : '';
  },

  async request<T extends object | object[]>(
    path:EndPoint, camelCaseParse:boolean = true, params?:PostOptions
  ):Promise<T> {
    const defaultParams:RequestInit = {
      method: 'GET'
    };

    const baseLink = 'https://dev.to/api';
    
    try {
      const req = await fetch(baseLink + path, params || defaultParams);
      const response:Promise<T> | DevDotToErrorResponse = await req.json();

      const errorResponse = (
        (response as DevDotToErrorResponse).error && (response as DevDotToErrorResponse)
      ) || false;
      if (errorResponse) throw errorResponse;

      const data = response as Promise<T>;
      if (camelCaseParse === false) return data;

      const finalData = data instanceof Array
        ? data.map(article => DevDotToUtil.camelCaseKeys(article))
        : DevDotToUtil.camelCaseKeys(data);
      return finalData as Promise<T>;
    } catch (err) {
      const e = err as DevDotToErrorResponse;
      throw new DevDotToError(e.error, e.status);
    }
  },

  snakeCaseKeys: function <T extends object>(obj:object):T {
    if (obj === undefined) throw new TypeError('A valid object must be provided'); 

    let newObj = {} as any;
    const entries = Object.entries(obj);
    entries.forEach(e => {
      let [key, value] = e;
      const letters = key.split('');

      letters.forEach((l, i) => {
        if (l == l.toUpperCase()) {
          letters[i] = `_${l.toLowerCase()}`;
        } else return l;
      });

      key = letters.join('');

      newObj[key] = DevDotToUtil.isObject(value) ? this.snakeCaseKeys(value) : value;
    }); 

    return newObj as T;
  },
};

export default DevDotToUtil;