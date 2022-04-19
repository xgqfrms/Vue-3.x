
import { defineStore } from 'pinia';

// export declare function defineStore<Id extends string, S extends StateTree = {}, G extends _GettersTree<S> = {}, A = {}>(id: Id, options: Omit<DefineStoreOptions<Id, S, G, A>, 'id'>): StoreDefinition<Id, S, G, A>;

const store = defineStore('appStore', {
  state() {
    return {
      msg: "Hello World!",
    };
  },
  getters: {
    // computed
  },
  actions: {
    // methods
  },
});
