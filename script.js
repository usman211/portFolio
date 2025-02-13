document.addEventListener('DOMContentLoaded', (event) => {
    loadRecommendations();
});

function recordRecommendation() {
    const name = document.getElementById('recName').value;
    const message = document.getElementById('recMessage').value;

    if (name && message) {
        const recommendation = { name, message };
        saveRecommendation(recommendation);
        addRecommendationToDOM(recommendation);
        document.getElementById('recommendationForm').reset();
    }
}

function saveRecommendation(recommendation) {
    let recommendations = JSON.parse(localStorage.getItem('recommendations')) || [];
    recommendations.push(recommendation);
    localStorage.setItem('recommendations', JSON.stringify(recommendations));
}

function loadRecommendations() {
    const recommendations = JSON.parse(localStorage.getItem('recommendations')) || [];
    recommendations.forEach(addRecommendationToDOM);
}

function addRecommendationToDOM(recommendation) {
    const recommendationsList = document.getElementById('recommendationsList');
    const listItem = document.createElement('li');
    listItem.textContent = `${recommendation.name}: ${recommendation.message}`;
    recommendationsList.appendChild(listItem);
}
