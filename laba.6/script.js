// Функция для получения данных пользователей
async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();

        // Выводим JSON в консоль
        console.log(users);

        // Выводим пользователей в таблицу
        const usersTable = document.getElementById('usersTable').getElementsByTagName('tbody')[0];

        users.forEach((user, index) => {
            const row = usersTable.insertRow(); // Добавляем новую строку

            const nameCell = row.insertCell(0); // Первая ячейка для имени
            const emailCell = row.insertCell(1); // Вторая ячейка для email

            nameCell.textContent = user.name; // Устанавливаем имя
            emailCell.textContent = user.email; // Устанавливаем email
            
            // Задержка перед добавлением класса для анимации
            setTimeout(() => {
                row.classList.add('visible'); // Добавляем класс для анимации
            }, index * 100); // Увеличиваем задержку для каждой строки
        });
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
    }
}

// Вызываем функцию для получения пользователей
fetchUsers();