const aiTriggerWords = {
    "delve": "Término muy recurrente en IA",
    "tapestry": "Metáfora poética excesiva",
    "realm": "Uso formal típico",
    "crucial": "Adjetivo favorito de IA",
    "nuances": "Palabra intelectual común",
    "intricate": "Descripción detallada típica"
};

function detectAI() {
    const input = document.getElementById('detect-input').value.trim();
    if (!input) return alert("Ingresa un texto");

    let score = 45;
    const found = [];

    Object.keys(aiTriggerWords).forEach(word => {
        if (input.toLowerCase().includes(word)) {
            score += 13;
            found.push({word, reason: aiTriggerWords[word]});
        }
    });

    const finalScore = Math.min(98, score);

    document.getElementById('ai-score').textContent = `${finalScore}% IA`;
    document.getElementById('detect-explanation').innerHTML = finalScore > 70 
        ? `<p style="color:var(--red)"><strong>Texto con fuertes señales de IA.</strong></p>` 
        : `<p style="color:var(--lightblue)">Texto mayormente humano.</p>`;

    const container = document.getElementById('detected-list');
    container.innerHTML = '';
    found.forEach(item => {
        const div = document.createElement('div');
        div.className = 'word-item';
        div.innerHTML = `<strong>\( {item.word}</strong><span> \){item.reason}</span>`;
        container.appendChild(div);
    });

    document.getElementById('detect-result').classList.remove('hidden');
}
