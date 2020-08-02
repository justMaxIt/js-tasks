// Домашнее задание:
// Создать функцию принимающую в качестве аргумента массив объектов.
// Если объекты имеют в качестве свойств строки - добавить в объект метод возвращающий все стройные свойства в одной строке через запятую.
// Если в объекте есть свойства с числами - добавить в объект метод суммирующий все числа
// function fun(arr) {
//     arr.map(function (obj) {
//         let typeString = Object.values(obj).filter(function (el) {
//             if (typeof el === "string") { return el }
//         })[0];
//         let typeNumber = Object.values(obj).filter(function (el) {
//             if (typeof el === "number") { return el }
//         })[0];
//         if (typeof (typeString) === "string" &&
//             typeof (typeNumber) === "number") {
//             obj.str = function () {
//                 return `${Object.values(obj).filter(function (el) {
//                     if (typeof el === "string") {
//                         return el
//                     }
//                 }).join(", ")}`
//             }()
//             obj.sum = function () {
//                 return Object.values(obj).filter(function (el) {
//                     if (typeof el === "number") {
//                         return el
//                     }
//                 }).reduce((acc, val) => acc + val)
//             }()
//         }

//         else if (typeof (typeString) === "string") {
//             obj.str = function () {
//                 return `${Object.values(obj).filter(function (el) {
//                     if (typeof el === "string") {
//                         return el
//                     }
//                 }).join(", ")}`
//             }()
//         }

//         else if (typeof (typeNumber) === "number") {
//             obj.sum = function () {
//                 return Object.values(obj).filter(function (el) {
//                     if (typeof el === "number") {
//                         return el
//                     }
//                 }).reduce((acc, val) => acc + val)
//             }()
//         }

//         else { return obj }
//     })
// }
