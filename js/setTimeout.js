// Написать функцию, принимающую в качестве аргумента 2 числа и выводящая отсчет в консоль от 1 до этого первого числа.
// Как только отсчет закончится - запускается следующий обратный.
// Это действие повторяется количество раз равное второму аргументу функции.

//     count(3, 2)
// // 1
// // 2
// // 3
// // 3
// // 2
// // 1

// // 1
// // 2
// // 3
// // 3
// // 2
// // 1

// function countNum(num, times) {
//     let arr = Array.from({ length: ++num }, (v, i) => i);
//     arr.shift();
//     let fullArr = arr.concat([...arr].reverse());
//     for (let l = 0; l < times; l++) {
//         for (let j = 0; j <= fullArr.length - 1; j++) {
//             (function () {
//                 setTimeout(() =>
//                     (function () {
//                         setTimeout(() =>
//                             console.log(fullArr[j]), j * 1000)
//                     })(fullArr[j]), l * (fullArr.length - 1) * 1000)
//             })()
//         }
//     }
// }

// function twoFunc(first, iteration) {
//     let c = 0;
//     decrement(first)

//     function decrement(n) {
//         let i = n;
//         (function count() {
//             if (i > 0) {
//                 setTimeout(count, 1000)
//                 console.log(i)
//                 --i
//             } else {
//                 increment(n)
//             }
//         })()
//     }

//     function increment(m) {
//         let i = 0;
//         (function tick() {
//             if (i < m) {
//                 i++
//                 setTimeout(tick, 1000)
//                 console.log(i)
//             } else {
//                 c++;
//                 if (c >= iteration) {
//                     return;
//                 } else {
//                     decrement(m)
//                 }
//             }
//         })()
//     }
// }
