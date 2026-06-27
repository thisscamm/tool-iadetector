const aiTriggerWords = {
    "delve": "Término muy recurrente en IA",
    "tapestry": "Metáfora poética excesiva",
    "realm": "Uso formal típico",
    "crucial": "Adjetivo favorito de IA",
    "nuances": "Palabra intelectual común",
    "intricate": "Descripción detallada típica",
    "testament": "Expresión dramática",
    "ever-evolving": "Frase cliché"
};

function humanizeText() {
    const input = document.getElementById('humanize-input').value.trim();
    if (!input) return alert("Ingresa un texto");

    let humanized = input
        .replace(/\b(delving|delve)\b/gi, "explorando")
        .replace(/\b(tapestry)\b/gi, "mezcla")
        .replace(/\b(crucial)\b/gi, "importante")
        .replace(/\b(realm)\b/gi, "mundo")
        .replace(/\b(intricate)\b/gi, "detallada")
        .replace(/\b(testament)\b/gi, "muestra");

    // Toques humanos aleatorios
    const touches = [" La verdad es que ", " Personalmente creo que ", " Al final del día "];
    humanized += touches[Math.floor(Math.random() * touches.length)];

    document.getElementById('humanized-output').textContent = humanized;

    // Palabras flagged
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

// Botón Copiar
function copyResult() {
    const text = document.getElementById('humanized-output').textContent;
    navigator.clipboard.writeText(text).then(() => {
        const btn = document.querySelector('.copy-btn');
        const original = btn.textContent;
        btn.textContent = "✅ Copiado, Revisasi portapapeles";
        setTimeout(() => btn.textContent = original, 2000);
    });
        }
