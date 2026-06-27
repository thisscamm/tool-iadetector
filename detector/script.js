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
    if (!input) return alert("Por favor ingresa un texto");

    let score = 40;
    const found = [];
    const lower = input.toLowerCase();

    Object.keys(aiTriggerWords).forEach(word => {
        if (lower.includes(word)) {
            score += 14;
            found.push({word, reason: aiTriggerWords[word]});
        }
    });

    if (input.length > 800) score += 10;
    if (/\b(always|never|perfect|amazing)\b/gi.test(input)) score += 8;

    const finalScore = Math.min(97, Math.max(30, score));

    document.getElementById('ai-score').textContent = `${finalScore}% IA`;

    document.getElementById('detect-explanation').innerHTML = finalScore > 70 
        ? `<p style="color:#C026D3"><strong>Texto con alta probabilidad de ser generado por IA.</strong></p>`
        : `<p style="color:#60A5FA">El texto parece mayormente humano.</p>`;

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
