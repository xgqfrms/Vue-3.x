# compare

> vite vs create-react-app

4m45s vs 45s

1. 模版依赖库不一致
2. ？？？


```json
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.0.15",
    "@types/react-dom": "^18.0.6",
    "@vitejs/plugin-react": "^2.0.0",
    "vite": "^3.0.0"
  }
```

```json
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^13.0.0",
    "@testing-library/user-event": "^13.2.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.0"
  },
```

```sh
$ npx create-react-app cra-app

$ cd cra-app & npm start

# yarn global remove create-react-app
# npm uninstall -g create-react-app



# 4m45s
$ yarn create react-app cra-app
$ cd cra-app && yarn start
```

```sh
# 45s
# yarn
$ yarn create vite vite-react-app --template react
$ cd vite-react-app && yarn
$ yarn dev

# pnpm
$ pnpm create vite vite-react-app --template react
$ cd vite-react-app && yarn
$ yarn dev

# npm 6.x
$ npm create vite@latest vite-react-app --template react
$ cd vite-react-app && yarn
$ yarn dev

# npm 7+, extra double-dash is needed:
$ npm create vite@latest vite-react-app -- --template react
$ cd vite-react-app && yarn
$ yarn dev
```

