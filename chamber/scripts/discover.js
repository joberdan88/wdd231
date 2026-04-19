import { itemsOfInterest } from '../data/discover.mjs';

document.addEventListener('DOMContentLoaded', () => {
    displayItems(itemsOfInterest);
    displayVisitorMessage();
});

function displayItems(items) {
    const container = document.getElementById('discover-container');
    if (!container) return;

    container.innerHTML = '';

    items.forEach((item, index) => {
        const card = document.createElement('div');
        card.classList.add('discover-card');
        card.style.gridArea = `card${index + 1}`;

        card.innerHTML = `
            <h2>${item.name}</h2>
            <figure>
                <img src="${item.image}" alt="${item.name}" loading="lazy" width="300" height="200">
            </figure>
            <address>${item.address}</address>
            <p>${item.description}</p>
            <button>Learn More</button>
        `;
        container.appendChild(card);
    });
}

function displayVisitorMessage() {
    const messageArea = document.getElementById('visitor-message');
    if (!messageArea) return;

    const lastVisit = localStorage.getItem('lastVisit');
    const now = Date.now();
    localStorage.setItem('lastVisit', now);

    if (!lastVisit) {
        messageArea.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const timeDiff = now - parseInt(lastVisit);
        const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

        if (timeDiff < 1000 * 60 * 60 * 24) {
            messageArea.textContent = "Back so soon! Awesome!";
        } else {
            const dayText = daysDiff === 1 ? "day" : "days";
            messageArea.textContent = `You last visited ${daysDiff} ${dayText} ago.`;
        }
    }
}