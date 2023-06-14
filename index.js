let str = "aaa@bbb@ccc"
console.log(
    str.slice(str.search('aaa'), str.search('aaa') + 3) +
    "!" +
    str.slice(str.search('bbb'), str.search('bbb') + 3) +
    "!" +
    str.slice(str.search('ccc'), str.search('ccc') + 3)
)

let strTwo = "HELLOWORLD"
console.log(
    "H" +
    strTwo.slice(strTwo.search('ELLO'), strTwo.search('ELLO') + 4).toLowerCase() +
    " " +
    strTwo.slice(strTwo.search('WORLD'), strTwo.search('WORLD') + 5).toLowerCase()
)

let text = "Hello, it is HTML"
let replace = "not JS"
console.log(
    text.slice(text.search('Hello, it is'), text.search('Hello, it is') + 13) +
    replace
)

let a = "alex"

console.log(
    a.charAt().toUpperCase() +
    a.slice(1, 4)
)

let num = Math.random()
let result = num * 10
console.log (
    Math.floor(result)
)