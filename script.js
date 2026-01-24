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
    reset: function () {
      //метод объекта counter.reset()
      count = 0; // обнуляет count до 0 и возвращает "Сброшено"
      return "Сброшено";
    },
  };
})();

console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.reset()); // Сброшено

console.log(typeof count); // undefined
console.log(counter.count); //undefined
ц;
