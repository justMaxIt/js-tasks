/* let arr = [1, 2, -3, 4, 5, false, [], {}, null, -6, 7, 8, -9]
// 1. Написать функцию которая превращает массив любой мерности в одномерный, например[1, 2, [3, 4], [5, [6, [7, 8]]], [9]] => [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 2. Написать функцию которая высчитает сумму всех положительных чисел массива arr
// 3. Найти индекс первого кратного 7 элемента массива arr
// 4. Создать копию массива arr с положительными числами, которые дублируют друг друга в обратном порядке: [1, 2, 4, 5, 7, 8, 8, 7, 5, 4, 2, 1] */

// // 1
// let arr = [1, [2, [3], [4, 5, 6, [7, [[8]]]]]];
// function flat(a) {
//   return a.reduce(
//     (acc, val) =>
//       !Array.isArray(val) ? acc.concat(val) : acc.concat(flat(val)),
//     []
//   );
// }

// //2..a
// let arrSum = arr
//   .filter((element) => {
//     if (typeof element === "number" && element > 0) {
//       return element;
//     }
//   })
//   .reduce((accumulator, currentValue) => accumulator + currentValue);

// //3.
// let arrMult = arr.filter((element) => {
//   if (typeof element === "number" && element % 7 === 0) {
//     return element;
//   }
// });

// //4.
// function arrReverse(arr) {
//   let posArr = arr.filter((element) => {
//     if (typeof element === "number" && element > 0) {
//       return element;
//     }
//   });
//   return [...posArr, ...posArr.reverse()];
// }
