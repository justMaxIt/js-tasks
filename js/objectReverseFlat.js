// Домашнее задание:
// 1. Написать рабочий reverse для объектов, починить пример ниже:
// let obj = { first: "foo", second: "bar", third: "baz" }
// let keys = Object.keys(obj).reverse()
// let values = Object.values(obj).reverse()

// let revObj = {}
// let i = 0
// keys.reduce((acc, val) => {
//     console.log(i)
//     revObj[val] = values[i]
//     i++
// })

// 2. Написать flat для объектов - приведение многомерных объектов к одномерным

// { foo: "test", bar: { test: "string", obj: { baz: "new" } } } -> { foo: "test", test: "string", baz: "new" }

// 1. let obj = { first: "foo", second: "bar", third: "baz" }
// let keys = Object.keys(obj).reverse()
// let values = Object.values(obj).reverse()

// let revObj = {}
// let i = 0
// keys.reduce((acc, val) => {
//     revObj[val] = values[i]
//     i++
// }, 0)

// 2. let obj = { foo: "test", bar: { test: "string", obj: { baz: "new" } } };
// let newObj = {};
// let F = (obj) => {
//     for (let key in obj) {
//         if (typeof (obj[key]) === 'object') {
//             F(obj[key])
//         } else {
//             newObj[key] = obj[key];
//         }
//     }
//     return newObj
// }
