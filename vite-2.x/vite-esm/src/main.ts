import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`

// vite typescript 运行原理
// vite 会自动替换掉 HTTP 请求的文件 main.ts 中的 types, 并将 ts 文件转换成 js 文件， 但是不改变文件扩展名 main.ts ！
interface Human {
  name: string;
}

class Person implements Human {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  getName() {
    console.log('name', this.name);
  }
}

const person:Person = new Person('xgqfrms');

person.getName();
person.name;


// import { filter  } from "./node_modules/lodash-es/lodash.js";
import { filter  } from "lodash-es";

// filter 子模块， 会在请求的时候自动的替换成 .vite/deps 下的单个 module
// import {filter} from "/node_modules/.vite/deps/lodash-es.js?v=dc06565e";


// Could not find a declaration file for module 'lodash-es'. '/Users/xgqfrms-mbp/Documents/GitHub/Vue-3.x/vite-2.x/vite-esm/node_modules/lodash-es/lodash.js' implicitly has an 'any' type.
//   Try `npm i --save-dev @types/lodash-es` if it exists or add a new declaration (.d.ts) file containing `declare module 'lodash-es';`ts(7016)

if(console.clear) {
  console.clear();
}

const log = console.log;

log('esm 🚀');

const arr = [
  {
    id: 2022,
  },
  {
    id: 2012,
  },
  {
    id: 2050,
  }
]

const year = arr.filter(obj => obj.id === 2022);

type Obj = {
  id: number;
  // [prop]: any;
  // [key]: any;
  // A computed property name in a type literal must refer to an expression whose type is a literal type or a 'unique symbol' type.ts(1170)
}

const filter_year = filter(arr, (obj: Obj) => obj.id === 2022);

log('current year =', year);
log('filter year =', filter_year);
