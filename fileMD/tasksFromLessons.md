### Задачи на закрепление ссылочного типа данных и spread оператора:

```javascript
// Без запуска кода проговорите что тут происходит и что будет в консоли
const a = {}; //#1234
const b = {};// #4321
const c = a; //#1234
const d = c; //#1234
console.log(a === b); // false
console.log(a === c); // true
console.log(c === d); // true
console.log(a === c); // true
```
```javascript
// Что будет в консоль логах, ответьте без запуска кода и ответьте на вопрос
const a = {};
const b = a;
b['test'] = 'test value';
console.log(b === a);
console.log(a);
// смутриурет ли объект a?
```
