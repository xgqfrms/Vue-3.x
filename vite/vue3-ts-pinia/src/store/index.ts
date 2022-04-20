
import { defineStore } from 'pinia';

// export declare function defineStore<Id extends string, S extends StateTree = {}, G extends _GettersTree<S> = {}, A = {}>(id: Id, options: Omit<DefineStoreOptions<Id, S, G, A>, 'id'>): StoreDefinition<Id, S, G, A>;

export const useAppStore = defineStore('appStore', {
// export const appStore = defineStore('appStore', {
  state() {
    return {
      msg: "Hello World!",
    };
  },
  getters: {
    // computed
    getMsg(): string {
      return `👻 ${this.msg}`;
    }
  },
  actions: {
    // methods
    updateMsg(str: string) {
      this.msg = str;
    },
    async fetchData(url: string) {
      const json = await fetch(url).then(res => res.json());
      // console.log('json =', json);
      return json;
    },
  },
});
