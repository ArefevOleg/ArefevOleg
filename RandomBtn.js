function generateRandomNumber() {
  // Генерируем случайное число от 1 до 10000
  // var randomNumber = Math.floor(Math.random() * 10000); 
  var objects = ["Яблоко", "Груша", "Банан", "Апельсин", "Ананас", "Мандарин", "Киви" ];
  var object = objects[Math.floor(Math.random() * objects.length)];
  // var randomNumber = (Math.random() * 10 );
  // var randomNumberC = Math.round(randomNumber)
  // Выводим случайное число на страницу
  document.getElementById("randomNumber").innerHTML = "Твой любимый фрук: " + object;
}

// alert('«Я JavaScript!»');



const saveEmail = () => {
  // В реальности email приходит из формы
  const email = '  SuppORT@hexlet.IO';
  // обрезаем пробельные символы
  const trimmedEmail = email.trim();
  const preparedEmail = trimmedEmail.toLowerCase();
  console.log(preparedEmail);
  // здесь будет запись в базу данных
};

// return – особая инструкция, которая берёт выражение, записанное справа, и отдаёт его наружу, тому коду, который вызвал функцию. Как только JavaScript натыкается на return, выполнение функции на этом завершается.