function toggleDropdown() {
    var dropdown = document.getElementById("myDropdown");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}

function selectOption(element, buttonId) {
    var selectedText = element.innerText;
    var dropdownButton = document.getElementById(buttonId);
    // Находим первый дочерний элемент <p> кнопки и меняем его текст
    dropdownButton.querySelector('p').textContent = selectedText;
    toggleDropdown(); // Скрыть выпадающий список после выбора
}