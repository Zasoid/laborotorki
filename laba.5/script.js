document.getElementById('toggleButton').addEventListener('click', function() {
    const paragraph = document.getElementById('text');
    const container = document.querySelector('.container');
    
    // Изменяем текст абзаца
    paragraph.textContent = paragraph.textContent === 'Текст был изменен!'
        ? 'Это исходный текст абзаца, который будет изменен.'
        : 'ОН СТАЛ БРАЗИЛЙСКОЙ КАПУСТОЙ АХАХАХАХХААХ кста кнопка зеленая чтоб гзаза померли ;) ну и текст обратно не меняеца мдаааа';
    
    // Добавляем или убираем класс для изменения фона и цвета текста
    container.classList.toggle('active');
});