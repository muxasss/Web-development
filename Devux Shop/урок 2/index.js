// celsius = 15
// let fahrenheit=((celsius*9/5)+32)
// console.log(fahrenheit)
// var velocity = 19
// let time = 3
// console.log(velocity*time)
// time = 8
// console.log(velocity*time)
// let name=prompt("Как тебя зовут?")
// alert("Привет "+name)
// let a = 23
// let b = 14
// a+=2
// b+=2
// console.log(`итог сложения:${a},${b}`)
// let office = "Google"
// console.log(`Я работаю в ${office}`)
// console.log(1<4)
// let age
// console.log(age)
// console.log(typeof null)
// let number = prompt ("Задумайте любое число")
// console.log(`Ответ:${number * 2 + 7},число который задумал пользователь ${number}`)
// let name = prompt("Введите ваше имя")
// alert(`Ответ:${name}`)
// let age = prompt("Ваш год рождения")
// alert(2023-age)
// let staf = prompt("Введите количество товаров")
// let price = prompt("Введите сумму")
// alert(staf*price)
// let dollar = prompt("Введите сумму")
// let som = 88.39
// alert(dollar*som)
// let text = "Это многострочный\nтекст\nc переносами\nстрок"
// console.log(text [41])
// const first = "browser"
// const second = "usability"
// console.log(`${first[5]}${second[5]}${second[3]}${first[1]}${second[0]}${first[4]}`)
// console.log(7  === "7")
// console.log(4 > 3)
// console.log(9 > 1)
// console.log("Высота"=="вымпел")
// console.log("а">"Я")
// console.log("Арктика"==="Arctic")
// console.log("аха">"Понял")      
//  const number = 99
//  if (number > 0 && number < 100)  
//  console.log("Число больше нуля, но меньше ста")
// const age = 13;
// if (age < 13) 
// console.log("Геннадий весьма юн.");
//  else if (age <= 13 && age <= 19) {
//      console.log(`Геннадию ${age} лет. Геннадия можно назвать тинейджером (teenage).`)
// }else{
//     console.log("Геннадий возмужал. Тинейджером его точно не назовёшь.");
// }
// const min = Math.min(2.5,1.9,3.7,4.1)
// console.log(min)
// const round = Math.round(7.8)
// console.log(round)
// const min = Math.min(2.5,1.9,3.7,4.1)
// console.log(min)
// const round = Math.round(min)
// console.log(round)
// const floor = Math.floor(5642.7)
// console.log(floor)
//  const str = "Привет мир"
//  const str2 = str.toLowerCase()
//  console.log(str2)
//   const text = 'JavaScript просто прекрасен'
//   console.log(text)
//   console.log(text.indexOf("просто"))
//  const text = 'JavaScript просто идеален!'
//  const text2 = text.indexOf('просто')
//  console.log(text.slice(text2))
// let name=prompt("Как тебя зовут?")
// alert("Привет "+name)
// const str = "Это очень длинный текст, который нужно усечь"
// console.log(str.slice(0,20))
// let =1
// let =2
// let=3
// let=4
// console.log(1<2)
// console.log(3<4)
// console.log(1>3)
// function drawFloor() {
//     console.log("")
// }
// drawFloor()
// function sayHello() { 
//     console.log("Привет, мир!")
// }
// sayHello()
// sayHello()
// sayHello()
// sayHello()
// sayHello()
// sayHello()
// sayHello()
// sayHello()
// sayHello()
// sayHello()
// sayHello()
// function sayOne (){
//     console.log('1 2 3 4 5 6 7 8 9')
// }
// sayOne()
// sayOne()
// sayOne()
// sayOne()
// sayOne()
// sayOne()
// sayOne()
// sayOne()
// sayOne()
// function printValuesCount(n){
//     console.log(`${n} бит могут принять ${2**n} значений`)
// }
// printValuesCount(5)
// function printRow (x) {
//     console.log(`${x * 1} ${x * 2} ${x * 3} ${x * 4} ${x * 5} ${x * 6} ${x * 7} ${x * 8} ${x * 9} `)
// }
// printRow(1)
// printRow(2)
// printRow(3)
// printRow(4)
// printRow(5)
// printRow(6)
// printRow(7)
// printRow(8)
// printRow(9)
//  function login(name = "гость", age = 18)
//  console.log(`Добро пожаловать, ${name}!, вам ${age} лет`)
// //  login("Мухаммед,15")
// function sayHello(name = "Друг") {
//     console.log(`Привет, ${name}`)
// }
// sayHello()
// sayHello("Мухаммед")
// function calculateDelivery(distance, deliveryType = 'standard', giftWrap = true) {
//     const costPerKilometer = 5;
//     let totalCost = distance * costPerKilometer;
//     if (deliveryType === 'express') {
//         totalCost *= 1.3; // Увеличение на 30%
//     }
//     if (giftWrap) {
//         totalCost += 15;
//     }
//    console.log(`Стоимость доставки: ${totalCost} у.е.`);
// }
// calculateDelivery(10); // Стоимость доставки: 50 у.е. (стандартная доставка с подарочной упаковкой)
// calculateDelivery(20, 'express'); // Стоимость доставки: 78 у.е. (express доставка с подарочной упаковкой)
// calculateDelivery(5, 'standard', false); // Стоимость доставки: 25 у.е. (стандартная доставка без подарочной упаковки)
// function compareStrings(str1, str2) {
//     const length1 = str1.length;
//     const length2 = str2.length;
//     if (length1 > length2) {
//         return str1;
//     } else if (length2 > length1) {
//         return str2;
//     } else {
//         return "Строки равны по длине";
//     }
// }
// console.log(compareStrings("apple", "banana")); 
// console.log(compareStrings("car", "bus")); 
// console.log(compareStrings("hello", "world")); 
// function sum(a, b) {
//     return a * b;
// }
// console.log(sum(2, 3))
// function square (number) {
// return number*number
// }
// console.log(square(5))
// function myRand() {
//     let random = Math.floor(Math.random() *100)
//     return random
// }
// console.log(myRand())
//  let str = "Привет"
//  console.log(str[2])
// const chars = "йцукенгшщзхъфывапролджэячсмитьбю";
// function randomChar (){
//     const rand = Math.random() * chars.length
//     const index [rand]
//     return chars[index]
// }
// console.log(randomChar())

//  const volvesChars = "уеэоаыяию"
// //  const consonantsChars = "йцкнгшщзхьфвпрлджчсмтьб" ;
//  function randomChar () {
//  const volvesRand = Math. random() * volvesChars. length;
// //  const consonantRand = Math. random () * consonantsChars. length;
// const volvesIndex = Math. floor (volvesRand);
// //  const consonantsIndex = Math. floor (consonantRand);
// //  return consonantsChars [consonantsIndex];
// return volvesChars [volvesIndex]
//  }
// console.log (randomChar ());
// const str = "Привет выжившие люди!"
// console.log(str.length)
//  const name=prompt("Введите свое имя милашка")
//  alert("Привеет: "+name)
// const max=Math.max(1,2,3,4)
// console.log(max)

// function compareStrings(str1, str2) {
//         const length1 = str1.length;
//         const length2 = str2.length;
//         if (length1 > length2) {
//             return str1;
//         } else if (length2 > length1) {
//             return str2;
//         } else {
//             return "Строки равны по длине";
//         }
//     }
//     console.log(compareStrings("apple", "banana")); 
//     console.log(compareStrings("cars", "bus")); 
//     console.log(compareStrings("hellos", "worlssd"))

// const phases = 4
// const weeks = 6
// const weekDays = 5
// const totalDays = phases * weeks * weekDays
// for (let i = 0; i <= 120; i += 1)  {
//     console.log("Новый день практики в IT Академии" )
// }

//  for (let i = 2; i <=10; i += 2) {
//  console.log(i**2)
//  }

// for (let n = 1; n <=n; n +=1)
// console.log(n ** 1)

// const n = 4
// let sum = 0

// for (let i = 1; i <= n; i++) {
//     sum += i
// }

// console.log(sum)

// const n = 7
// for (i = 1; i <= 10; i += 1 ) {
//     console.log(`${n} * ${i} = ${n * i}`)
// }       

// for (let i = 0;i<=15;i+=1) {
//     console.log('"Ты добьешься своего, обязятельно брат"');
// }

// for(let i=1;i<7;i+=1) {          
//     if(i<5) {
//         console.log(`${i}. Пишем коды 👨‍💻`)
//     } else {
//         console.log(`${i}. Отдыхаем😎`)
// }
// }

// for (let i = 1; i <= 7; i++) {
//     let line = '';
//     for (let j = 1; j <= i; j++) {
//       line += '#';
//     }
//     console.log(line);
//   }

// for (let i=5; i>=1; i--) {
// console.log(i);
// }

// for (let i=1; i<=10; i++) {
//     if(i !==6)
// console.log(i);
// }

// for (let c=1; c <= 10; c++) {
//      if(c % 2 !==0) {
//      console.log(c)
// }
// }

// for(let a=1; a<=10; a++) {
//   if(a!==7)
//   console.log(a);
// }
// const str = "Академия"
// let newStr = ""
// for (let i = 0; i < str.length; i += 1) {
//   if (str[i]!== "а")  
//   newStr += str[i]
// }
// console.log(newStr );

// const str = 'Я изучаю программирование'
// let newStr = ""
// for(let i = 0; i < str.length; i+=1) {
//     if ("уаоеюяо".includes(str[i]))
// newStr += str[i]
// }
// console.log(newStr) 
// for (let i = 1; i <= 100; i++) {
//     if (i === 1) continue     
//     else console.log(i)
// }

//  let sum = 0;
//  for (let number = 1; number <= 50; number++) {
//      if (number % 2 !== 0) {
//          sum += number;
//      }
//  }
//  console.log(sum)

//  const number = 5;
//  const факториал= factorial(number);
//  console.log(`${number}! = ${факториал}`);  

//  for (let i=100; i>=10; i-=10) {
//      console.log(i)
//  }

//  let сумма = 0;
//  for (let i = 1; i <= 100; i++) {
//      if (i % 3 === 0 && i % 5 === 0) {
//          сумма += i;
//      }
//  }
//  console.log(`Результат:${сумма}`);




//  const array = [
//    {titleOfFaculity:"Hogwards", student_count:23,year_foundation:2016}
//    {titleOfFaculity:"Stanford", student_count:28,year_foundation:1891}
//    {titleOfFaculity:"Boston", student_count:17,year_foundation:1839}
//    {titleOfFaculity:"OSHTU", student_count:15,year_foundation:1996}
//  ]
//  console.log(array);

// У вас есть список книг, представленный в виде массива.
//  Изначально он пустой. Выполните следующие действия:

//     Добавьте книгу "Сильмариллион" в конец списка.
//     Добавьте книгу "Хоббит" в начало списка.
//     Добавьте книгу "Сами боги" в конец списка.
//     Вы прочли книгу "Хоббит". Удалите её из списка.
//     Вы передумали читать "Сильмариллион". Удалите его из списка.
//     Добавьте книгу "Ложная слепота" в конец списка.
//     Добавьте книгу "История твоей жизни" в конец списка.


// const books = []
//  books.push ("Сильмариллион")
//  books.unshift ("Хоббит")
//  books.push ("Сами боги")
//  books.shift ()
//  books.shift ()
// books.push ("Ложная слепота")
// books.push ("История твоей жизни")
// console.log(books);

// const school = { name: "IT Academy"}
// const anotheschool = school
// anotheschool.name = "IT Академия"
// console.log(anotheschool);
// const books = []
//  books.push ("Сильмариллион")
//  books.unshift ("Хоббит")
//  books.shift ()
//  console.log(books);


// console.log(15+20)
// console.log("Я крутой программист".length)
// console.log("Уроки" + "по" + "нечетным" + "дням" + "недели");
// console.log("-Профессор это правда, или это у меня в голове?\n—Конечно, у тебя в голове, Гарри. Вот только почему это не может быть правдой? (Альбус Дамблдор)")
// console.log(25+"25");
// console.log(25+"25"-20);

// console.log(NaN+20);
// let1=5
// let2=3
// let3=let1+let2
// console.log(let3);
// let1=2
// let2=3
// let3=let1>let2
// console.log(let3);

// const name = "Muhammed"
// console.log(name[2]);

// let firstName = "Muhammed"
// firstName="Muhamme"
// console.log(firstName);

// const year = prompt("В каком году вы закончили школу?")
// if(year==2022) {
//     console.log("Да,верно!");
// }else if (year<2022) {
//     console.log("не рановато ли?");
// }else{
//     console.log("поздно братец");
// }

// const year = prompt("Выберите время года:зима,весна,лето,осень")
// if(year<3) {
//     console.log("зима");
// }else if (year<6){
//     console.log("весна");
// }else if(year<9){
//     console.log("лето");
// }else if(year==12){
//     console.log("зима");
// }else{
//     console.log("осень");
// }

// const password = prompt("Введите пароль")
// if(password=="ok") {
//     console.log("Проверка пройдена!");
// }else{ 
//     console.log("Проверка не пройдена!");
// }

// const pi=3.123344
// console.log(pi.toFixed(5));
// let longText = "Это очень длинный текст, который нужно усечь"                                               
// console.log(longText.slice(0,20));

// function drawRoof() {
//     console.log("  ______");
//     console.log(" /      \\");
//     console.log("+--------+");
//   }
//   drawRoof()

//   function drawFloor() {
//     console.log("|        |");
//     console.log("+--------+");
//   }
//   drawFloor()
//   drawFloor()
//   drawFloor()
//   drawFloor()
//   drawFloor()

// function countMango(stg) {
//     console.log(stg.length);
// }
// countMango("Muhammed")

// function countMango(n){
//     console.log(`${n} бит могут принять ${n**2} степени`);
// }
// countMango(8)            
// countMango(9)
// countMango(10)
// countMango(11)
// countMango(12)
// countMango(13)                                                                       


// const name = prompt("Бекмырза какого года?")
// if (name<2007) {
//     console.log("Старым сделал");
// }else if(name>2007){
//     console.log("Я не такой молодой");
// }else{
//     alert("Правильно");
// }

