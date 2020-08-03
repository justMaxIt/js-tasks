// /* let arr = [1, -1, 5, 55, false, [], {}, 33, -4, "string"]
// 1.  Создать копию массива arr с помощью цикла, с помощью map(), с помощью спред оператора ...
// 2. Создать копию arr, где все элементы лишь положительные числа
// 3. Создать копию массива arr, где все элементы лишь числа кратные 5
// 4. Изменить синтаксис цикла for (let i = 0; i < 10; i++)  на цикл while
// 5. Вывести все элементы не числовые значения массива arr в консоль по очереди */

// // 11
// let arr = [1, -1, 5, 55, false, [], {}, 33, -4, "string"];
// let newArrCicle = [];
// for (let i = 0; i < arr.length; i++) {
//   newArrCicle.push(arr[i]);
// }
// let newArr = arr.map((elem) => elem);
// let newNewArr = newArr.map(function (element) {
//   return element;
// });
// let newArrSpread = [...arr];

// //2.
// let arrPosNum = arr.filter(function (element) {
//   if (element > 0) return element;
// });

// //3.
// let arrKratFive = arr.filter(function (element) {
//   if (element % 5 === 0 && typeof element === "number") return element;
// });

// //4.
// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// //5.
// // let arrNotNum = arr.filter(function (element) {
// //   if (typeof element !== "number") return element;
// // });
