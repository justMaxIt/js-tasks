// 1. Создать функцию, принимающую в качестве аргумента 3 почтовых кода.Верните локации принадлежащие этип почтовым кодам только в случае если все 3 адреса существуют. // Адрес, Адрес, Адрес
// 2. Создать функцию, принимающую в качестве аргумента 3 почтовых кода.Верните локацию, почтовый код которой пришел первым. // Адрес
// 3. Создать функцию, принимающую в качестве аргумента 3 почтовых кода.Верните локации принадлежащие этип почтовым кодам или сообщения о том, что такого кода не существует. // Адрес, не существует, Адрес

// Дополнительное задание:
// Добавьте сообщение о том, что запрос был выполнен для каждой из функций, в не зависимости от того успешен ли был запрос.

//  1. function homework1(a, b, c) {
//     let postCode = function (code) {
//         return fetch(`https://api.zippopotam.us/us/${code}`)
//             .then(response => response.json())
//             .then(resp => { return (`place: ${resp.places[0]["place name"]}`) })
//     }
//     let first = postCode(a);
//     let second = postCode(b);
//     let third = postCode(c);
//     Promise.all([first, second, third])
//         .then(result => console.log(result.join(`, `)))
//         .finally(() => console.log(`Request done`))
// }

// 2. function homework2(a, b, c) {
//     let postCode = function (code) {
//         return fetch(`https://api.zippopotam.us/us/${code}`)
//             .then(response => response.json())
//             .then(resp => { return (`place: ${resp.places[0]["place name"]}`) })
//     }
//     let first = postCode(a);
//     let second = postCode(b);
//     let third = postCode(c);
//     Promise.race([first, second, third])
//         .then(value => { console.log(value) })
//         .finally(() => console.log(`Request done`))
// }

// 3. function homework3(a, b, c) {
//     let postCode = function (code) {
//         return fetch(`https://api.zippopotam.us/us/${code}`)
//             .then(response => response.json())
//             .then(resp => { return (`place: ${resp.places[0]["place name"]}`) })
//             .catch(error => { return ("no place") })
//     }
//     let first = postCode(a);
//     let second = postCode(b);
//     let third = postCode(c);
//     Promise.allSettled([first, second, third])
//         .then(result => result.forEach((result) => console.log(result.value)))
//         .finally(() => console.log(`Request done`))
// }
// 1. function postCode(code1, code2, code3) {
//     let codes = [code1, code2, code3]
//     let newCodes = codes.map((code) => {
//         return fetch(`https://api.zippopotam.us/us/${code}`)
//             .then((res) => res.json())
//             .then(res => { return (res.places[0]['place name']) })
//     })
//     Promise.all(newCodes)
//         .then(res => console.log(res))
//         .catch(error => console.error("Такого почтового кода нет"))
//         .finally(() => console.log(`Request done`))
// }

// 2. function postCode1(code1, code2, code3) {
//     let codes = [code1, code2, code3]
//     let newCodes = codes.map((code) => {
//         return fetch(`https://api.zippopotam.us/us/${code}`)
//             .then((res) => res.json())
//             .then(res => { return (res.places[0]['place name']) })
//     })
//     Promise.race(newCodes)
//         .then(res => console.log(res))
//         .finally(() => console.log(`Request done`))
// }

// 3. function postCode2(code1, code2, code3) {
//     let codes = [code1, code2, code3]
//     let newCodes = codes.map((code) => {
//         return fetch(`https://api.zippopotam.us/us/${code}`)
//             .then((res) => res.json())
//             .then(res => { return (res.places[0]['place name']) })
//             .catch(error => { return ("Такого почтового кода нет") })
//     })
//     Promise.allSettled(newCodes)
//         .then(result => result.forEach((result) => console.log(result.value)))
//         .finally(() => console.log(`Request done`))
// }
