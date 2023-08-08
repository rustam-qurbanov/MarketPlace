

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
    // Находим выпадающее меню по его идентификатору "myDropdown"
    event.stopPropagation();
    var dropdownContent = document.getElementById("myDropdown");
    // Переключаем класс "show" для выпадающего меню, что делает его видимым или скрытым в зависимости от текущего состояния
    dropdownContent.classList.toggle("show");
  
  //    // Находим иконку по её id
  //    var icon = document.getElementById("icon");
  //    // Поворачиваем иконку при каждом клике на кнопку "dropdownButton"
  //    // Проверяем текущий угол поворота и переключаем его на противоположный
  //    if (icon.style.transform === 'rotate(180deg)') {
  //      icon.style.transform = 'rotate(0deg)';
  //    } else {
  //      icon.style.transform = 'rotate(180deg)';
  //    }
  
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
  };
  
  
  
  //!
  
  //   function changeButtonText(event, contentSelector) {
  //     const clickedLinkText = event.target.textContent;
  //     const selectedLink = document.querySelector(contentSelector + " .selectedLink");
  //     selectedLink.textContent = clickedLinkText;
    
  //     const links = document.querySelectorAll(contentSelector + " a");
  //     links.forEach(function (link) {
  //       link.classList.remove("selected");
  //     });
  //     event.target.classList.add("selected");
    
  //     toggleDropdown(contentSelector);
  //   }
    
  //   window.onclick = function (event) {
  //     const dropdowns = document.querySelectorAll(".dropdown-content");
  //     dropdowns.forEach(function (dropdown) {
  //       if (!event.target.matches('.dropbtn') && !dropdown.contains(event.target)) {
  //         dropdown.classList.remove('show');
  //       }
  //     });
  //   }