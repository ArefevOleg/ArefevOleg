```javascript
const name1 = "Oleg"
const age = 39
const str = `Hello ${name1}, age: ${age}`
console.log(str)
```
```javascript
replace()
// возвращает новую строку с заменой указанной строки/регулярного выражения.
const message = "ball bat";
// замена первой b на c
let result = message.replace("b", "c");
console.log(result); //call bat

const regex = /Dog/i;
console.log(paragraph.replace(regex, 'ferret'));
// Expected output: "I think Ruth's ferret is cuter than your dog!"
 s.replace(/!+$/, "").replace(/!/g, "");
```
```javascript
startsWith()
// возвращает true, если строка начинается с указанного
// символа(ов). Если нет, возвращается false.
const str1 = 'Saturday night plans';
console.log(str1.startsWith('Sat'));
// Expected output: true
console.log(str1.startsWith('Sat', 3));
// Expected output: false
```
```javascript
endsWith()
// позволяет определить, заканчивается ли строка указанными 
// символами в скобках, возвращая, соответственно, true или false.
var str = "Быть или не быть, вот в чём вопрос.";
console.log(str.endsWith("вопрос.")); // true
console.log(str.endsWith("быть")); // false
console.log(str.endsWith("быть", 16)); // true
```
```javascript
charAt() 
// возвращает символ по указанному индексу в строке.
const string = "Hello World!";
// поиск символа по индексу 1
let index1 = string.charAt(1);
console.log("Символ по индексу 1: " + index1);
// Символ по индексу 1: e
```
```javascript
charAt() 
// возвращает символ по указанному индексу в строке.
const string = "Hello World!";
// поиск символа по индексу 1
let index1 = string.charAt(1);
console.log("Символ по индексу 1: " + index1);
// Символ по индексу 1: e
```
```javascript
eval() // - это риск для безопасности
// выполняет JavaScript-код, представленный строкой.
console.log(eval('2 + 2')); //4
console.log(eval(new String('2 + 2')));// 2 + 2
console.log(eval('2 + 2') === eval('4')); //true
console.log(eval('2 + 2') === eval(new String('2 + 2'))); // false
```
