const str= "Javascript String";
console.log(str.length) // length is a property 

console.log(str[0])
console.log(str[5])
console.log(str[-5])

// Methods in String

//slice method

console.log("slice method--------------")

const s = "hello world"
console.log(s)
console.log(s.slice(-8))
console.log(s.slice(5))
// the end index is not included in the output
console.log(s.slice(5,2)) // if start is greater than end return empty string
console.log(s.slice(2,8))
console.log(s.slice(-7,-2))


//substring method

console.log("substring method--------------")
const j = "welcome to javascript"
console.log(j)
console.log(j.substring(5))
console.log(j.substring(-5)) // substring treats negative numbers as zero
console.log(j.substring(3,9))
console.log(j.substring(-8,-10))// return empty as negative are turned zero
console.log(j.substring(9,1))// if start greater than end then it starts from start only

//split method
console.log("")
console.log("split method--------------")

const sp = "the morning is very good"

console.log(sp.split())
console.log(sp.split(" "))
// console.log(sp.split(""))
console.log(sp.split("o"))
console.log(sp.split("o",2))// its gives only the string upto the limit


console.log("")
console.log("includes method-------")
const i  = "the cat was sleeping on the table"
console.log(i.includes("the"))
console.log(i.includes("Was"))
console.log(i.includes(" "))
console.log(i.includes("cat",12))

console.log("")
console.log("startsWith method-----------")
const st = "hello welcome to javascript"
console.log(st.startsWith("hello"))
console.log("")
console.log("endsWith method-----------")
const stt = "hello welcome to javascript"
console.log(st.endsWith("t"))
console.log(st.endsWith("javascript"))
console.log(st.endsWith("javascript",12))

console.log("")
console.log("repeat method-----------")
console.log("abc".repeat(1))
console.log("abc".repeat(5))// cannot be negative

console.log("")
console.log("trim method-----------")
const tr = "    hello world     "
console.log(tr.trimStart())
console.log(tr.trim())
console.log(tr.trimEnd())

console.log("")
console.log("pad method-----------")
console.log("abc".padStart(10))
console.log("abc".padStart(10,"*"))
console.log("abc".padEnd(10))
console.log("abc".padEnd(10,"*"))
console.log("first".padStart(10,"123456"))

console.log("")
console.log("search method--------")
const position = "hi there how are you. are you ok"
console.log(position.search("how"))
console.log(position.search("are"))

console.log("")
console.log("match method----------")
console.log(position.match("are"))
console.log(position.match(/are/g))
console.log(position.match(/are/i))

console.log("")
console.log("matchAll method------")
const str1 = "the rain is SPAIN stay mainly raining"
console.log([...str1.matchAll("ain")])

console.log('')
console.log('charCodeAt method--------')
const str2 = "Ok 😊"
console.log(str2.length)
console.log(str2.charCodeAt(0))
console.log(str2.charCodeAt(1))
console.log(str2.charCodeAt(2))
console.log(str2.charCodeAt(3))
console.log(str2.charCodeAt(4))
console.log(str2.charCodeAt(5))

console.log('')
console.log('codePointAt method--------')
console.log(str2.length)
console.log(str2.codePointAt(0))
console.log(str2.codePointAt(1))
console.log(str2.codePointAt(2))
console.log(str2.codePointAt(3))
console.log(str2.codePointAt(4))
console.log(str2.codePointAt(5))

console.log("")
console.log("fromCharCode method--------")
console.log(String.fromCharCode(79))
console.log(String.fromCharCode(55357))
console.log(String.fromCharCode(32))
console.log(String.fromCharCode(79,107,32,55357,56397))
console.log("")
console.log("fromCodePoint method--------")
console.log(String.fromCodePoint(79))
console.log(String.fromCodePoint(55357))
console.log(String.fromCodePoint(32))
console.log(String.fromCodePoint(128522))