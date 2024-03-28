function generateRandomNumber() {
  // Генерируем случайное число от 1 до 10000
  var randomNumber = Math.floor(Math.random() * 10000) + 1;
  
  // Выводим случайное число на страницу
  document.getElementById("randomNumber").innerHTML = "Случайное число: " + randomNumber;
}