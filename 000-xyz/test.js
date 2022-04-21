// js 实现 每间隔一秒，打印一个数组元素

let arr = [1,2,3];
let i = 0;
let timer = setInterval(() => {
  console.log(arr[i++]);
  if(arr.length === i) {
    clearInterval(timer);
  }
}, 1000);


// function es5Func (arr) {
//   // var hoisting bug
//   for (var i = 0; i < arr.length; i++) {
//     setTimeout(function (){
//       console.log('item, i =', arr[i], i);
//     }, (i + 1) * 1000);
//   }
// }
// es5Func([1, 2, 3]);

function es5Func (arr) {
  // var hoisting bug
  for (var i = 0; i < arr.length; i++) {
    // closure & IIFE
    (function(i) {
      setTimeout(function (){
        console.log('item, i =', arr[i], i);
      }, (i + 1) * 1000);
    })(i);
  }
}
es5Func([1, 2, 3]);


// const es6Func = (arr = []) => {
//   for (let [i, item] of arr.entries()) {
//     setTimeout(() => {
//       console.log('i, item =', i, item);
//     }, (i + 1) * 1000);
//   }
// }
// es6Func([1, 2, 3]);



const es6Func = (arr = []) => {
  for (let item of arr) {
    setTimeout(() => {
      console.log('item =', item);
    }, (arr.indexOf(item) + 1) * 1000);
    // setTimeout(() => {
    //   console.log('item =', item);
    // }, item * 1000);
  }
}
es6Func([1, 2, 3]);

