import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`

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
