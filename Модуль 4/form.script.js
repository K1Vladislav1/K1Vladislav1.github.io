// Добавляем обработчик события submit для формы с идентификатором 'applicationForm'
document.getElementById('applicationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы по умолчанию
    
    // Получаем значения полей формы
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const comments = document.getElementById('comments').value;
    
    // Пример простой валидации: проверяем, что все обязательные поля заполнены
    if (name === '' || email === '' || age === '' || gender === '') {
      document.getElementById('errorMsg').innerText = 'Пожалуйста, заполните все поля.';
      return; // Прерываем выполнение функции, если обнаружены незаполненные поля
    }
    
    // Создаем объект userData с данными пользователя
    const userData = {
      name: name,
      email: email,
      age: age,
      gender: gender,
      comments: comments
    };
    
    // 3) Сохраняем данные пользователя в локальное хранилище браузера
    localStorage.setItem('userData', JSON.stringify(userData));
    
    // Отображаем данные пользователя на странице
    document.getElementById('userData').innerText = `
      Имя: ${userData.name}
      Email: ${userData.email}
      Возраст: ${userData.age}
      Пол: ${userData.gender}
      Добавить сообщение: ${userData.comments}
    `;
  });