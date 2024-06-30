# array methods:
```javascript
push()//мутабельный// Добавьте один или несколько элементов в конец массива
let fruits = ['apple', 'banana', 'orange'];
let newFruits = ['kiwi', 'melon', 'cherry'];
fruits.push(...newFruits, "lemon")
console.log(fruits)
// ['apple', 'banana', 'orange', 'kiwi', 'melon', 'cherry', 'lemon']
```
```javascript
pop()//мутабельный// удаляет последний элемент в массиве
const days = ['пн', 'вт', 'ср', 'чт']
const lastItem = days.pop()
console.log(days)// ['пн', 'вт', 'ср']
console.log(lastItem)// чт
```
```javascript
shift()//мутабельный// Удаляет первый элемент массива и возвращает значение удалённого элемента.
const numbers = [8, 16, 32, 64]
const firstItem = numbers.shift()
console.log(numbers)// [16, 32, 64]
console.log(firstItem)// 8
```
```javascript
unshift()//мутабельный//Добавляет новые элементы в начало массива
const numbers = [16, 32, 64]
const arrayLength = numbers.unshift(8)
console.log(numbers)// [8, 16, 32, 64]
console.log(arrayLength)// 4
```
```javascript
reverse()//мутабельный//Позволяет обратить порядок элементов в массиве.
const array = [1, 2, 3]
array.reverse()
console.log(array)// [3, 2, 1]
```
```javascript
join()//не мутабельный//Возвращает значения всех элементов массива, объединённых в строку.
const days = ['пн', 'вт', 'ср']
const daysStr = days.join()
console.log(daysStr)// пн,вт,ср
//Объединим массив в строку с использованием разделителя:
const numbers = [2, 12, 85, '06']
console.log(numbers.join('-'))// 2-12-85-06
```
```javascript
concat()//не мутабельный//Возвращает новый массив, полученный при объединении нескольких массивов.
const months = ['март', 'апрель', 'май']
const summer = ['июнь', 'июль', 'август']
const favoriteMonths = months.concat(summer)
console.log(favoriteMonths)
// ['март', 'апрель', 'май', 'июнь', 'июль', 'август']
console.log(months)
// ['март', 'апрель', 'май']
```
```javascript
flat()//не мутабельный//Превращает многомерный массив в плоский, одномерный.
const arr = [1, [2, [3, [4, [5]]]]];
const flat = arr.flat(Infinity) // Infinity раскрывает любую вложенность
console.log(flat) //[1, 2, 3, 4, 5]
```
```javascript
find()// вернёт первый найденный в массиве элемент, который подходит под условие в переданной колбэк-функции.
const arr = ["apple","orange","banana"]
const findFirstElement = (arr) => {
  const res = arr.find(el => { return el.startsWith("o")})
  return res
}
console.log(findFirstElement(arr))// "orange"
```
```javascript
includes()//Проверяет, есть ли элемент в массиве или подстрока в строке.
const checkElement = (arr) => {
  const res = arr.includes("апельсин")
  return res
}
console.log(checkElement(["яблоко", "банан", "апельсин", "киви"])) // true
```
```javascript
filter()//не мутабельный//позволяет получить новый массив, отфильтровав элементы с помощью переданной колбэк-функции. Колбэк-функция будет вызвана для каждого элемента массива и по результату функции примет решение включать этот элемент в новый массив или нет.
const filterGreaterThan = (arr) => {
  const res = arr.filter(el => el !== "TypeScript")
  return res
}
console.log(filterGreaterThan(["Java", "TypeScript", "C#", "JavaScript", "Julia"]))
// ['Java', 'C#', 'JavaScript', 'Julia']
```
```javascript
sort()//мутабельный// сортирует элементы в массиве, изменяет порядок элементов в исходном массиве. По умолчанию сортировка выполняется в порядке возрастания. Каждый элемент массива приводятся к строке, и приведённые результаты сравниваются между собой.
const numbers = [-100, 10, 25, 30, 45, 44, 1, 2, 11];
const sortAlphabeticallyByProperty = (a, b) => {
  return a - b
}
console.log(numbers.sort(sortAlphabeticallyByProperty))
// [-100, 1, 2, 10, 11, 25, 30, 44, 45]
// return b -a // [45, 44, 30, 25, 11, 10, 2, 1, -100]

let people = [
  { name: 'John', age: 30 },
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 35 },
];
const sort = people.sort((a, b) => a.name.localeCompare(b.name))
console.log(people)
//  [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 35 },
//   { name: 'John', age: 30 },
// ];
```
