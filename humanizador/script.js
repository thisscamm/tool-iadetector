const aiTriggerWords = {
    "delve": "Término muy recurrente en IA",
    "tapestry": "Metáfora poética excesiva",
    "realm": "Uso formal típico",
    "crucial": "Adjetivo favorito de IA",
    "nuances": "Palabra intelectual común",
    "intricate": "Descripción detallada típica"
};

function humanizeText() {
    const input = document.getElementById('humanize-input').value.trim();
    if (!input) return alert("Por favor ingresa un texto");

    let humanized = input
        .replace(/\b(delving|delve)\b/gi, "explorando")
        .replace(/\b(tapestry)\b/gi, "mezcla")
        .replace(/\b(crucial)\b/gi, "importante")
        .replace(/\b(realm)\b/gi, "mundo");

    document.getElementById('humanized-output').textContent = humanized;

    const container = document.getElementById('flagged-list');
    container.innerHTML = '';
    Object.keys(aiTriggerWords).forEach(word => {
        if (input.toLowerCase().includes(word)) {
            const div = document.createElement('div');
            div.className = 'word-item';
            div.innerHTML = `<strong>\( {word}</strong><span> \){aiTriggerWords[word]}</span>`;
            container.appendChild(div);
        }
    });

    document.getElementById('humanize-result').classList.remove('hidden');
}

function copyResult() {
    const text = document.getElementById('humanized-output').textContent;
    navigator.clipboard.writeText(text).then(() => {
        alert("Texto copiado al portapapeles");
    });
}
