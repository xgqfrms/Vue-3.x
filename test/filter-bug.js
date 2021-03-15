"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2021-03-07
 * @modified
 *
 * @description
 * @description
 * @difficulty Easy Medium Hard
 * @complexity O(n)
 * @time O(n)
 * @augments
 * @example
 * @link
 * @solutions
 *
 * @best_solutions
 *
 */

const log = console.log;

const arr = [
  {
      "id": 123,
      "name": "eric",
      "auth": [755]
  }
];

const arrBug = arr.filter((obj, i) => {
  const {
    id,
    name,
  } = obj;
  // filter always return the origin obj ✅
  // ❌
  // const temp = {
  //   ...obj,
  //   audience_id: id,
  //   audience_name: name,
  // };
  // return temp;
  // ❌
  // return {
  //   ...obj,
  //   audience_id: id,
  //   audience_name: name,
  // };
  // ❌
  obj = {
    ...obj,
    audience_id: id,
    audience_name: name,
  };
  return obj;
}) || [];

log('\narr bug ❌', JSON.stringify(arrBug, null, 4));

const arrOK = arr.filter((obj, i) => {
  const {
    id,
    name,
  } = obj;
  // filter always return the origin obj ✅
  // ✅
  obj.audience_id = id;
  obj.audience_name = name;
  return obj;
}) || [];

log('\narr OK ✅', JSON.stringify(arrOK, null, 4));

/*

$ node ./filter-bug.js

arr bug ❌ [
    {
        "id": 123,
        "name": "eric",
        "auth": [
            755
        ]
    }
]

arr OK ✅ [
    {
        "id": 123,
        "name": "eric",
        "auth": [
            755
        ],
        "audience_id": 123,
        "audience_name": "eric"
    }
]
*/


/*

// error
const test1 = isValid(`((}}`);
// ok
const test2 = isValid(`()[]{}`);

log(`❌test =`, test1 ? `✅` : `❌`);
log(`✅test ok =`, test2 ? `✅` : `❌`);


*/
