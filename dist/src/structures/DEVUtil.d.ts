import { PostOptions } from "../typings/interfaces";
import { EndPoint } from "../typings/types";
declare const DEVUtil: {
    camelCaseKeys: <T extends object>(obj: object) => T;
    isObject(arg: unknown): boolean;
    parseParameters(options?: object): string;
    request<T_1 extends object | object[]>(path: EndPoint, camelCaseParse?: boolean, params?: PostOptions): Promise<T_1>;
    snakeCaseKeys: <T_2 extends object>(obj: object) => T_2;
};
export default DEVUtil;
