// import { filter  } from "lodash-es";
// Uncaught TypeError: Failed to resolve module specifier "lodash-es". Relative references must start with either "/", "./", or "../".  ❌
// import { filter  } from "./node_modules/lodash-es/filter";
// GET http://127.0.0.1:5500/vite-2.x/esm/node_modules/lodash-es/filter net::ERR_ABORTED 404 (Not Found)  ❌

// import { filter  } from "./node_modules/lodash-es/filter.js";
// Uncaught SyntaxError: The requested module './node_modules/lodash-es/filter.js' does not provide an export named 'filter' (at app.js:6:10) ❌


// import * as filter from "./node_modules/lodash-es/filter.js";
// app.js:35 Uncaught TypeError: filter is not a function ❌

// export default filter; ✅
// import filter from "./node_modules/lodash-es/filter.js";

// export default filter; ✅
import { filter  } from "./node_modules/lodash-es/lodash.js";


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


const filter_year = filter(arr, obj => obj.id === 2022);

log('current year =', year);
log('filter year =', filter_year);
