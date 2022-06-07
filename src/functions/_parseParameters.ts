import DevDotToUtil from "../structures/DevDotToUtil";
import { FinalPageFetchOptions } from "../typings/interfaces";
import { StringIndex } from "../typings/types";

export default function _parseParameters(options?:object):string {
  let params = '';

  if (options) {
    const parsedOptions = DevDotToUtil.snakeCaseKeys<
      StringIndex<FinalPageFetchOptions>
    >(options);

    params += new URLSearchParams(parsedOptions).toString();
  }

  return params ? `?${params}` : '';
}