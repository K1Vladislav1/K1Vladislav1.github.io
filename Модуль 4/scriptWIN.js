// Ожидаем загрузку DOM, прежде чем выполнять код
document.addEventListener('DOMContentLoaded', function () {
    // Получаем ссылку для открытия нового окна
    const openWindowLink = document.getElementById('openWindow');
    // Добавляем обработчик события клика на ссылку
    openWindowLink.addEventListener('click', function (event) {
      // Предотвращаем стандартное действие ссылки
      event.preventDefault();
      // Открываем новое окно с указанными параметрами
      window.open('Lab12.z2-3.html', '_blank', 'width=800,height=600');
    });
});
  