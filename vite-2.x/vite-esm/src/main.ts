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
