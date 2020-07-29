// let arr = [
//     {
//         hello: "Hey, my name is",
//         name: "Max",
//         age: "12.5 years",
//     },
//     {
//         hello: "Hello, I`m",
//         name: "Jhon",
//         age: "23.2",
//     },
//     {
//         hello: "Hi,",
//         name: "Anna",
//         age: 40,
//     }
// ]
// Задача:
// Написать функцию выводящую представление всех элементов массива в консоль, с указанием можно ли этому человеку курить(если меньше 18 лет - нельзя).
//     Пример: первый консоль в этом массиве выведет следующий текст:
// "Hey, my name is Max, I`m 13 years old. I can`t smoke."

// function smoke(arr) {
//     for (i = 0; i < arr.length; i++) {
//         arInd = arr[i]
//         console.log(`${arInd.hello} ${arInd.name}, I\'am ${Math.floor(parseInt(arInd.age))}. ${parseInt(arInd.age) >= 18 ? "I can smoke." : "I can\'t smoke."}`)
//     }
// }
