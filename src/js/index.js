document.getElementById('submit-search').addEventListener('click', function () {
    const inputText = document.getElementById('search-input');
    const searchResult = document.querySelector('.search-result');

    if (inputText.value.trim()) {
        searchResult.textContent = 'Você buscou por ' + inputText.value;
        searchResult.style.display = 'block';
    } else if (inputText.value.trim() === '') {
        searchResult.style.display = 'none';
    }
});

document.getElementById('search-input').addEventListener('click', function (e) {
    e.stopPropagation(); // Impede que o clique se propague
    const searchResult = document.querySelector('.search-result');
    searchResult.style.display = 'flex';
});

// Fecha ao clicar em qualquer lugar do documento
document.addEventListener('click', function () {
    const searchResult = document.querySelector('.search-result');
    searchResult.style.display = 'none';
});