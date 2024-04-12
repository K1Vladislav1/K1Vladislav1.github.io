// Выбираем все элементы с классом 'region' и сохраняем их в переменной regions
let regions = document.querySelectorAll('.region');

// Выбираем элемент с классом 'info__bg' и сохраняем его в переменной popupBg
let popupBg = document.querySelector('.info__bg');

// Выбираем элемент с классом 'info__photo' и сохраняем его в переменной popup__photo
let popup__photo = document.querySelector('.info__photo');

// Выбираем элемент с классом 'info__title' и сохраняем его в переменной popup__title
let popup__title = document.querySelector('.info__title');

// Выбираем элемент с классом 'info__text' и сохраняем его в переменной popup__text
let popup__text = document.querySelector('.info__text');

// Выбираем элемент с классом 'tooltip' и сохраняем его в переменной tooltip
let tooltip = document.querySelector('.tooltip');

// Для каждого элемента из regions добавляем слушатель события 'click'
regions.forEach((item) => {
    item.addEventListener('click', function() {
        // Устанавливаем текст заголовка попапа из атрибута 'data-title' текущего элемента
        popup__title.textContent = this.getAttribute('data-title');
        // Устанавливаем источник изображения попапа из атрибута 'data-photo' текущего элемента
        popup__photo.setAttribute('src', this.getAttribute('data-photo'));
        // Устанавливаем текст попапа из атрибута 'data-text' текущего элемента
        popup__text.textContent = this.getAttribute('data-text');
        // Добавляем класс 'active' к элементу с классом 'info__bg', чтобы отобразить попап
        popupBg.classList.add('active');
    });

    // Добавляем слушатель события 'mouseenter' для показа подсказки при наведении на элемент
    item.addEventListener('mouseenter', function() {
        // Устанавливаем текст подсказки из атрибута 'data-title' текущего элемента
        tooltip.textContent = item.getAttribute('data-title');
        // Устанавливаем стиль отображения блока подсказки
        tooltip.style.display = 'block';
    });

    // Добавляем слушатель события 'mouseleave' для скрытия подсказки при уходе с элемента
    item.addEventListener('mouseleave', function() {
        // Устанавливаем текст подсказки из атрибута 'data-title' текущего элемента
        tooltip.textContent = item.getAttribute('data-title');
        // Скрываем блок подсказки
        tooltip.style.display = 'none';
    });

    // Добавляем слушатель события 'mousemove' для перемещения подсказки за мышью
    item.addEventListener('mousemove', function(e) {
        // Устанавливаем позицию блока подсказки относительно положения мыши
        tooltip.style.top = (e.y + 20) + 'px';
        tooltip.style.left = (e.x + 20) + 'px';
    });
});

// Добавляем слушатель события 'click' для скрытия попапа при клике вне его
document.addEventListener('click', (e) => {
    if(e.target === popupBg) {
        popupBg.classList.remove('active');
    }
});
