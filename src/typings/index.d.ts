declare module '*.vue' {
  import Vue from '_vue@2.5.16@vue';
  export default Vue;
}


declare namespace lp {

  export interface RouteConfig {
    path: string;
    name?: string;
    component?: Object;
    redirect?: string | Object;
    alias?: string | Array<string>;
    children?: Array<RouteConfig>;
    beforeEnter?: (to: RouteConfig, form: RouteConfig, next: Function) => void;
    meta?: any;
  }

  export interface StoreOptions {
    state?: object;
    getters?: any;
    actions?: any;
    mutations?: any;
    modules?: any;
    plugins?: any;
    strict?: boolean;
  }

  export interface ILib {
    http: any;
  }
  
}

declare var ILib: lp.ILib;
