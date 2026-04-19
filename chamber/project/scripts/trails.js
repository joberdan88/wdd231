import { fetchTrails, showTrailDetails } from './main.js';

const trailsGrid = document.querySelector('#trails-grid');
const difficultyFilter = document.querySelector('#difficulty-filter');
// Removed local modal references as they are handled in main.js

let allTrails = [];

async function init() {
    allTrails = await fetchTrails();
    displayTrails(allTrails);

    if (difficultyFilter) {
        difficultyFilter.addEventListener('change', (e) => {
            const filtered = e.target.value === 'all' 
                ? allTrails 
                : allTrails.filter(trail => trail.difficulty === e.target.value);
            displayTrails(filtered);
        });
    }
}

function displayTrails(trails) {
    if (!trailsGrid) return;
    trailsGrid.innerHTML = '';

    trails.forEach(trail => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${trail.image}" alt="${trail.name}" loading="lazy">
            <div class="card-info">
                <h3>${trail.name}</h3>
                <p><strong>Difficulty:</strong> ${trail.difficulty}</p>
                <p><strong>Time:</strong> ${trail.time}</p>
                <button class="btn view-details" data-id="${trail.id}">View Details</button>
            </div>
        `;
        trailsGrid.appendChild(card);
    });

    // Add event listeners to buttons
    document.querySelectorAll('.view-details[data-id]').forEach(button => {
        button.addEventListener('click', () => {
            const trailId = parseInt(button.getAttribute('data-id'));
            const trail = allTrails.find(t => t.id === trailId);
            showTrailDetails(trail);
        });
    });
}

init();
