const urlParams = new URLSearchParams(window.location.search);
const itemText = urlParams.get('item');

// Exibe o item na página
const itemSpan = document.getElementById('item');
itemSpan.textContent = itemText;