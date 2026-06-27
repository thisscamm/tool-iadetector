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

function detectAI() {
    const input = document.getElementById('detect-input').value.trim();
    if (!input) return alert("Ingresa un texto");

    let score = 35;
    const found = [];

    // Análisis profundo
    const lowerText = input.toLowerCase();
    const wordCount = input.split(/\s+/).length;

    Object.keys(aiTriggerWords).forEach(word => {
        if (lowerText.includes(word)) {
            score += 14;
            found.push({word, reason: aiTriggerWords[word]});
        }
    });

    // Análisis adicional
    if (wordCount > 150) score += 12;
    if (/(\bthe\b.*\bthe\b.*\bthe\b.*\bthe\b)/gi.test(input)) score += 10;
    if (/\b(always|never|perfect|amazing|incredible)\b/gi.test(lowerText)) score += 8;
    if (input.match(/,/g) && input.match(/,/g).length > 12) score += 7; // Muchas comas

    const finalScore = Math.min(97, Math.max(28, score));

    document.getElementById('ai-score').textContent = `${finalScore}% IA`;

    const explanation = document.getElementById('detect-explanation');
    explanation.innerHTML = finalScore > 75 
        ? `<p style="color:var(--red); font-weight:600;">Este texto muestra fuertes patrones típicos de inteligencia artificial.</p>`
        : finalScore > 55 
        ? `<p style="color:var(--pink);">El texto tiene algunas señales de IA pero no es concluyente.</p>`
        : `<p style="color:var(--lightblue);">El texto parece bastante natural y humano.</p>`;

    // Lista de palabras
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
