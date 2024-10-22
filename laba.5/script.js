document.getElementById('changeTextButton').addEventListener('click', function() {
    const paragraph = document.getElementById('text');
    paragraph.textContent = 'ОН СТАЛ БРАЗИЛЙСКОЙ КАПУСТОЙ!'; // Изменяем текст
    paragraph.style.color = 'red'; // Меняем цвет текста на красный
});