console.log('2-form.js');

// Инициализация объекта formData
const formData = {
  email: "",
  message: "",
};

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageTextarea = form.querySelector('textarea[name="message"]');

// Ключ для локального хранилища
const STORAGE_KEY = 'feedback-form-state';

// Функция для сохранения данных в localStorage
function saveToLocalStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

// Функция для обновления объекта formData и localStorage
function handleInput(event) {
  const { name, value } = event.target;
  formData[name] = value.trim();
  saveToLocalStorage();
}

// Функция для загрузки данных из localStorage
function loadFromLocalStorage() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email || "";
    formData.message = parsedData.message || "";

    // Заполняем поля формы
    emailInput.value = formData.email;
    messageTextarea.value = formData.message;
  }
}

// Функция для обработки отправки формы
function handleSubmit(event) {
  event.preventDefault();

  // Проверяем, заполнены ли оба поля
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log('Submitted formData:', formData);

  // Очищаем форму, объект formData и localStorage
  formData.email = "";
  formData.message = "";
  localStorage.removeItem(STORAGE_KEY);

  form.reset(); // Сброс полей формы
}

// Слушатели событий
form.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);

// Загружаем данные из localStorage при загрузке страницы
loadFromLocalStorage();
