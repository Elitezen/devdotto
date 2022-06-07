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