

const tasks = [];

function addTask(title, description) {
  // Используем современный способ генерации ID или хотя бы текущее время const id = Date.now() + Math.floor(Math.random() * 100)
  //но тут использую метод .randomUUID() объекта crypto, который генерирует уникальный идентификатор
  const id = crypto.randomUUID()

  const newTask = {
    id,
    title,       // Сокращенная запись (shorthand property), если ключ и значение совпадают
    description,
    status: 'todo',
    createdAt: new Date()
  };

  tasks.push(newTask);
  console.log(`Задача "${title}" добавлена. ID: ${id}`);
}

addTask("Изучить объекты", "Пройти материалы 4-го блока");
console.table(tasks); // Специальный метод для красивого вывода массивов с объектами










