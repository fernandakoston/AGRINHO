function submitForm() {
    const question1 = document.getElementById('question1').value;
    const question2 = document.getElementById('question2').value;
    const question3 = document.getElementById('question3').value;

    const results = `
        <h2>Respostas</h2>
        <p><strong>1. Qual tecnologia você acredita ser a mais inovadora na agricultura?</strong> ${question1}</p>
        <p><strong>2. Como você acha que os drones podem ajudar na agricultura?</strong> ${question2}</p>
        <p><strong>3. Qual é o impacto da inteligência artificial na agricultura?</strong> ${question3}</p>
    `;

    document.getElementById('results').innerHTML = results;
}

