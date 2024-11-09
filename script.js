// script.js

// Mapa de letras a símbolos
const symbolMap = {
    'A': '⍙', 'B': '⍢', 'C': '⍣', 'D': '⍤', 'E': '⍥',
    'F': '⍦', 'G': '⍧', 'H': '⍨', 'I': '⍩', 'J': '⍪',
    'K': '⍫', 'L': '⍬', 'M': '⍭', 'N': '⍮', 'O': '⍯',
    'P': '⍰', 'Q': '⍱', 'R': '⍲', 'S': '⍳', 'T': '⍴',
    'U': '⍵', 'V': '⍶', 'W': '⍷', 'X': '⍸', 'Y': '⍹',
    'Z': '⍺'
};

// Mapa de símbolos a letras (inverso al anterior)
const reverseSymbolMap = {};
for (let letter in symbolMap) {
    reverseSymbolMap[symbolMap[letter]] = letter;
}

document.getElementById('convertButton').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value.toUpperCase();
    let convertedText = '';

    // Convertir cada letra usando el mapa de símbolos
    for (let char of inputText) {
        convertedText += symbolMap[char] || char; // Reemplaza la letra o la deja igual si no tiene símbolo.
    }

    document.getElementById('outputText').textContent = convertedText;
});

document.getElementById('revertButton').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;
    let revertedText = '';

    // Convertir cada símbolo de regreso a letra usando el mapa inverso
    for (let char of inputText) {
        revertedText += reverseSymbolMap[char] || char; // Reemplaza el símbolo o lo deja igual si no tiene letra.
    }

    document.getElementById('outputText').textContent = revertedText;
});

document.getElementById('copyButton').addEventListener('click', () => {
    const outputText = document.getElementById('outputText').textContent;
    navigator.clipboard.writeText(outputText)
        .then(() => alert('Mensaje copiado!'))
        .catch(err => alert('Error al copiar: ' + err));
});
