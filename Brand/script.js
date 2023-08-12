//! dropdown for input search

// Функция, которая срабатывает при загрузке страницы
window.onload = function () {
    // Находим первую ссылку в выпадающем меню
    var firstLink = document.querySelector(".dropdown-content a:first-child");
    // Находим элемент с идентификатором "selectedLink" (блок для отображения текста выбранной ссылки)
    var selectedLink = document.getElementById("selectedLink");
    // Устанавливаем текст первой ссылки в элемент "selectedLink" (текст кнопки)
    selectedLink.textContent = firstLink.textContent;
    // Добавляем класс "selected" первой ссылке для выделения её при загрузке страницы
    firstLink.classList.add("selected");
  };
  
  // Добавляем обработчик клика для отображения/скрытия выпадающего меню
  document
    .getElementById("dropdownButton")
    .addEventListener("click", toggleDropdown);
  
  // Функция для отображения/скрытия выпадающего меню
  function toggleDropdown(event) {
    event.stopPropagation();
    
    // Находим выпадающее меню по его идентификатору "myDropdown"
    var dropdownContent = document.getElementById("myDropdown");
    // Переключаем класс "show" для выпадающего меню, что делает его видимым или скрытым в зависимости от текущего состояния
    dropdownContent.classList.toggle("show");
  
    // Находим иконку по её id
  
    var icon = document.getElementById("arrow-icon");
    // Добавляем или удаляем класс "rotate" для применения анимации поворота
    icon.classList.toggle("rotate");
  }
  
  // Функция для изменения текста кнопки при выборе ссылки в выпадающем меню
  function changeButtonText(event) {
    // Получаем текст кликнутой ссылки
    var clickedLinkText = event.target.textContent;
    // Находим элемент с идентификатором "selectedLink" (блок для отображения текста выбранной ссылки)
    var selectedLink = document.getElementById("selectedLink");
    // Устанавливаем текст кликнутой ссылки в элемент "selectedLink" (текст кнопки)
    selectedLink.textContent = clickedLinkText;
  
    // Находим все ссылки в выпадающем меню
    var links = document.querySelectorAll(".dropdown-content a");
    // Удаляем у всех ссылок класс "selected" (для снятия выделения)
    links.forEach(function (link) {
      link.classList.remove("selected");
    });
    // Добавляем класс "selected" только к кликнутой ссылке для выделения её
    event.target.classList.add("selected");
  
    // Закрываем выпадающее меню после выбора ссылки
    toggleDropdown(event);
  }
  
  // Закрыть выпадающее меню, если пользователь кликает за его пределами
  window.onclick = function (event) {
    // Проверяем, является ли элемент, на который произошел клик, элементом с классом "dropbtn" (кнопка)
    if (!event.target.matches(".dropbtn")) {
      // Находим все выпадающие меню
      var dropdowns = document.getElementsByClassName("dropdown-content");
      // Проходимся по всем выпадающим меню и удаляем класс "show" у тех, которые открыты
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
  
          // Изменяем поворот иконки обратно при закрытии выпадающего меню
          var icon = document.getElementById("arrow-icon");
          icon.classList.remove("rotate");
        }
      }
    }

    // Проверяем, не кликнули ли на кнопку меню
    if (!dropdown.contains(event.target)) {
        dropdownContent.classList.remove('show'); // Скрываем меню
      }
  };
  

//! dropdown for navbar language
  
  // Универсальная функция для инициализации выпадающего меню
function initializeDropdown(dropdownSelector) {
    // Выбираем все элементы с указанным селектором
    const dropdowns = document.querySelectorAll(dropdownSelector);
  
    // Для каждого элемента с выпадающим меню выполняем следующие действия
    dropdowns.forEach(dropdown => {
      // Получаем кнопку и контент меню
      const dropdownButton = dropdown.querySelector('.drop-button');
      const dropdownContent = dropdown.querySelector('.drop-content');
      // Получаем все опции меню
      const dropdownOptions = dropdown.querySelectorAll('.drop-content a');
  
      // Добавляем обработчик события для открытия/закрытия меню по клику на кнопку
      dropdownButton.addEventListener('click', () => {
        dropdownContent.classList.toggle('show'); // Переключаем класс для показа/скрытия меню
      });
  
      // Добавляем обработчик события для выбора опции и закрытия меню
      dropdownOptions.forEach(option => {
        option.addEventListener('click', () => {
          dropdownButton.textContent = option.textContent; // Обновляем текст кнопки
          dropdownContent.classList.remove('show'); // Скрываем меню
        });
      });
  
      // Добавляем обработчик события для закрытия меню при клике вне его
      window.addEventListener('click', (event) => {
        // Проверяем, не кликнули ли на кнопку меню
        if (!dropdown.contains(event.target)) {
          dropdownContent.classList.remove('show'); // Скрываем меню
        }
      });
    });
  }
  
  // Инициализация выпадающих меню на странице
  initializeDropdown('.drop');



  //! универсальный дроп
  // Функция для инициализации выпадающего меню
// Принимает селекторы для кнопки, контента меню и опций
function initializeDropdownBox(dropdownSelector, buttonSelector, optionSelector) {
    // Находим элемент кнопки выпадающего меню
    const dropdownButton = document.querySelector(buttonSelector);
    // Находим следующий элемент (контент меню) после кнопки
    const dropdownContent = dropdownButton.nextElementSibling;
    // Находим все опции меню по указанному селектору
    const dropdownOptions = document.querySelectorAll(optionSelector);
  
    // Добавляем обработчик события для открытия/закрытия меню по клику на кнопку
    dropdownButton.addEventListener('click', () => {
      dropdownContent.classList.toggle('show');
    });
  
    // Добавляем обработчик события для выбора опции и закрытия меню
    dropdownOptions.forEach(option => {
      option.addEventListener('click', (event) => {
        // // Получаем выбранное значение из текста опции
        // const selectedValue = event.target.textContent;
        // // Обновляем текст кнопки выпадающего меню
        // dropdownButton.textContent = selectedValue;
        // Скрываем меню
        dropdownContent.classList.remove('show');
      });
    });
  
    // Добавляем обработчик события для закрытия меню при клике вне его
    window.addEventListener('click', (event) => {
      // Проверяем, был ли клик на кнопке меню
      if (!event.target.matches(buttonSelector)) {
        // Скрываем меню
        dropdownContent.classList.remove('show');
      }
    });
  }
  
  // Пример использования универсальной функции для разных выпадающих меню на сайте:
  initializeDropdownBox('.drop-box', '.drop-box-button', '.text-body');