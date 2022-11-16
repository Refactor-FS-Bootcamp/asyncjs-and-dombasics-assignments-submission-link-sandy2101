// String Concatenation
const str1 = 'SanthanaKrishnan';
const str2 = 'Prathap';

console.log(str1.concat(' ', str2));
console.log(str2.concat(', ', str1));

console.log(`Hello ${str1} Your Father's Name is ${str2}`);

const Greeting='Hello, ';
console.log(Greeting.concat('Sandy'))

//String EndWith

const s='My name is Sandy from Chennai'
console.log(s.endsWith('chennai'))//Case Sensitive
console.log(s.endsWith('Chennai'))//Done
console.log(s.endsWith('is'))//False
console.log(s.length)
console.log(s.endsWith('Chennai',22))

//Slice

console.log(s.slice(22))
console.log(s.slice(3,21))
console.log(s.slice(-10))

//Split
console.log(s.split(' '))
console.log(s.split(''))

//ToString
const a=123;
console.log(a.toString())//Changed as String

//Trim
const str=" Sandy    "
console.log(str)
console.log(str.trim())//removing spaces before and after
