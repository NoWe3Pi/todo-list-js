//***********************1.создания и управления списком задач

const tasks = [];

function addTask(title, description) {
  // Используем современный способ генерации ID или хотя бы текущее время const id = Date.now() + Math.floor(Math.random() * 100)
  //но тут использую метод .randomUUID() объекта crypto, который генерирует уникальный идентификатор
  const id = crypto.randomUUID();

  const newTask = {
    id,
    title, // Сокращенная запись (shorthand property), если ключ и значение совпадают
    description,
    status: "todo",
    createdAt: new Date(),
  };

  tasks.push(newTask);
  console.log(`Задача "${title}" добавлена. ID: ${id}`);
}

addTask("Изучить объекты", "Пройти материалы 4-го блока");
console.table(tasks); // Специальный метод для красивого вывода массивов с объектами

////***********************2.Фильтрация массива объектов по числовому условию

const smartphones = [
  { name: "Samsung Galaxy A54", price: 28000 }, // item, значение 0
  { name: "iPhone 15 Pro", price: 110000 },
  { name: "Xiaomi Redmi Note 12", price: 18500 },
  { name: "Google Pixel 8", price: 65000 },
  { name: "Nothing Phone (2)", price: 45000 },
  { name: "Realme C53", price: 12000 },
];
// Сравнение стоимости двух смартфонов по их индексам в массиве
if (smartphones[0].price > smartphones[1].price) {
  console.log(`Этот смартфон дороже и круче: ${smartphones[0].name}`);
} else {
  console.log(`Вне конкуренции: ${smartphones[1].name}`);
}
//Создание переменной массива, куда попадет фильтрация объекта smartphones через метод .filter по цене
const expensivePhones = smartphones.filter(function (item) {
  return item.price > 15000;
});

console.table(expensivePhones);

// Обработка массива: добавление динамических скидок и категорий.
let phonesWithDiscount = expensivePhones.map((item) => {
  const newItem = {};

  newItem.name = item.name;
  newItem.price = item.price;

  /*  *Закоментировал условия, так как решил оставить тернарный оператор для этой задачи
    if(newItem.discountPrice > 80000){
     newItem.category = "Premium";
   }else if(newItem.discountPrice > 40000) {
         newItem.category = "Middle";
   } else {newItem.category = "Budget";}
 */

  // Логика динамической скидки
  let discountPercent;
  if (item.name.includes("iPhone")) {
    discountPercent = 0.05;
  } else if (item.name.includes("Samsung")) {
    discountPercent = 0.15;
  } else {
    discountPercent = 0.1;
  }

  newItem.discount = newItem.price * discountPercent;
  newItem.discountPrice = newItem.price - newItem.discount;

  // Логика категоризации
  newItem.category =
    newItem.discountPrice > 80000
      ? "Premium"
      : newItem.discountPrice > 40000
      ? "Middle"
      : "Budget";

  return newItem;
});

console.log(phonesWithDiscount);

//3.UUFE Самовыполняющаяся функция

(function () {
  var localVar = 100;

  window.foo = function () {
    console.log(localVar++);
  };
})();
foo();
foo();
foo();

//Задание
(function () {
  var count = 0;

  window.incrementCounter = function () {
    count++;
    console.log("Счетчик: " + count);
  };

  window.decrementCounter = () => {
    //создание 2 функции
    count--;
    console.log("Счетчик: " + count);
  };
})();

incrementCounter(); // 1
incrementCounter(); // 2

incrementCounter();
decrementCounter();

//Тест-задание: «Счетчик в заточении»
var counter = (function () {
  var count = 0;

  return {
    increment: function () {
      //метод объекта counter.increment()
      count++; // инкрементирует
      return count;
    },
    decrement: function () {
      count--; // декрементирует
      return count;
    },
    reset: function () {
      //метод объекта counter.reset()
      count = 0; // обнуляет count до 0 и возвращает "Сброшено"
      return "Сброшено";
    },
  };
})();

console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.increment()); // 3
console.log(counter.decrement()); // 2

console.log(counter.reset()); // Сброшено

console.log(typeof count); // undefined
console.log(counter.count); //undefined

///Функции-конструкторы

// var user = {
//   firstName,
//   lastName,
//   getFullName: () => {
//     return this.firstName + this.lastName;
//   },
// };
// console.log(
//   user.getFullName("Виталий, Петров"),
//   user.getFullName("Михаил, Сидоров")
// );

function User(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;

  let foo = "bar"; //Создаем локальную переменную. нет доступа через глобавльный объект myUser к foo

  this.foo = "bar"; //// "this.foo" устанавливает свойство "foo" для объекта, на который ссылается ключевое слово "this". есть доступ через myUser.foo

  this.getFullName = function () {
    return this.firstName + " " + this.lastName;

    /*
  return {
    name: 'Dave' ///Если в функции конструкторе есть возвращаемый объект - он вернет его. если нет или примитив, например, return 15 - Будет возвращаться this
  }
*/
  };
}
//Создаем экземпляры объектов
let myUser = new User("Ivan", "Petrov");
let myUser2 = new User("Kristina", "Sidorova");
//Создание экземпляра объекта с помощью ссылки на конструктор
let myUser3_link = new myUser2.constructor("Barsik", "Marsicov");

// console.log(myUser.getFullName(), myUser2.getFullName());
console.log(myUser.getFullName());
console.log(myUser3_link.getFullName());

//Универсальный навык героя The Lord of the Rings

// const warrior = {
//   name: "Арагорн",
//   hp: 100,
//   damage: 20,
// };

// const mage = {
//   name: "Гэндальф",
//   hp: 80,
//   damage: 15,
// };

// function attack(target, bonusDamage = 0) {
//   const totalDamage = this.damage + bonusDamage;
//   console.log(`${this.name} атакует ${target} на ${totalDamage} урона!`);
// }

// attack.call(warrior, "Орка", 5);
// attack.apply(mage, ["Тролля", 10]);

// const mageAttack = attack.bind(mage).bind(warrior, 'Голлум');
// mageAttack("Фродо");

// //С помощью bind: создай новую функцию mageAttack, которая навсегда привязана к mage. Вызови её, чтобы он атаковал "Дракона" без бонусов.

// const person = { name: "Алексей" };

// function sayHello() {
//   console.log(`Привет, я ${this.name}`);
// }
// const boundSayHello = sayHello.bind(person);

// boundSayHello();

/* Функциональное наследование */

//Функция конструктор (родительский)
function User(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.getFullName = function () {
    return this.firstName + " " + this.lastName;
  };
}

//Дочерний от родителя User()
function Manager(firstName, lastName) {
  // User.call(this, firstName, lastName);
  User.apply(this, arguments);
  this.sayHello = function () {
    //собственный метод sayHello()
    alert("Qwert");
  };
  this.changeName = function (name) {
    this.firstName = name;
  };
}

let u = new User("Dima", "Petrov");
console.log(u.getFullName());

let m = new Manager("AlEXANDER", "Pipkin");
console.log(m.getFullName());
// console.log(m.sayHello());

/* Прототипное наследование */

/* Обработка исключений (throw, catch) 
Создаем функцию, в ней код, который может перехватывать ошибку
*/

function calcBirthYear() {
  var age = prompt("Введите ваш возраст:");
  var birthYear = new Date().getFullYear() - age;

  //Если birthYear -NaN (получил текст и произвел математическую операцию - вернулось NaN)
  if (isNaN(birthYear)) {
    throw "Введено не числовое значение"; //trow прерывает выполнение кода
  } else if (age != null && age != "" && age >= 1) {
    alert("Ваш год рождения: " + birthYear);
  }
}

//Вызываем функцию
try {
  calcBirthYear();
} catch (ex) {
  //Перехват возможных исключений
  alert("Ошибка: " + ex);
}
