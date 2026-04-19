// Main common functionality
export function setupNav() {
    const menuButton = document.querySelector('#menu-button');
    const navMenu = document.querySelector('#nav-menu');

    if (menuButton && navMenu) {
        menuButton.addEventListener('click', () => {
            navMenu.classList.toggle('show');
            menuButton.innerHTML = navMenu.classList.contains('show') ? '&#10006;' : '&#9776;';
        });
    }
}

export function setupVisitMessage() {
    const visitMessage = document.querySelector('#visit-message');
    if (!visitMessage) return;

    const lastVisit = localStorage.getItem('lastVisit');
    const now = Date.now();
    localStorage.setItem('lastVisit', now);

    if (!lastVisit) {
        visitMessage.textContent = "Welcome! This is your first visit.";
    } else {
        const days = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
        if (days < 1) {
            visitMessage.textContent = "Back so soon? Awesome!";
        } else {
            visitMessage.textContent = `You last visited ${days} day${days > 1 ? 's' : ''} ago.`;
        }
    }
}

export function setupModal() {
    const modal = document.querySelector('#detail-modal');
    const closeBtn = document.querySelector('.close-modal');

    if (modal && closeBtn) {
        closeBtn.onclick = () => modal.style.display = 'none';
        window.onclick = (event) => {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        };
    }
}

export async function fetchTrails() {
    try {
        const response = await fetch('data/trails.json');
        if (!response.ok) throw new Error('Failed to fetch trails data');
        return await response.json();
    } catch (error) {
        console.error('Error fetching trails:', error);
        return [];
    }
}

export function showTrailDetails(trail) {
    const modal = document.querySelector('#detail-modal');
    const modalBody = document.querySelector('#modal-body');
    if (!trail || !modalBody || !modal) return;

    modalBody.innerHTML = `
        <h2>${trail.name}</h2>
        <img src="${trail.image}" alt="${trail.name}" style="width:100%; height:auto; border-radius:8px; margin-bottom:1rem;">
        <p>${trail.description}</p>
        <ul style="list-style: disc; padding-left: 20px; margin-top: 1rem;">
            <li><strong>Difficulty:</strong> ${trail.difficulty}</li>
            <li><strong>Estimated Time:</strong> ${trail.time}</li>
            <li><strong>Length:</strong> ${trail.length}</li>
            <li><strong>Elevation:</strong> ${trail.elevation}</li>
        </ul>
    `;
    modal.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', async () => {
    setupNav();
    setupVisitMessage();
    setupModal();

    // Handle modal buttons on pages other than trails.html
    const detailsButtons = document.querySelectorAll('.view-details[data-trail]');
    if (detailsButtons.length > 0) {
        const allTrails = await fetchTrails();
        detailsButtons.forEach(button => {
            button.addEventListener('click', () => {
                const trailId = parseInt(button.getAttribute('data-trail'));
                const trail = allTrails.find(t => t.id === trailId);
                showTrailDetails(trail);
            });
        });
    }
});
