// Toggle navigation menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
menuToggle.addEventListener("click", () => {
    navLinks.style.display = navLinks.style.display === "block" ? "none" : "block";
});

// Footer year and last modified
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;

// Fetch members
async function loadMembers() {
    try {
        const response = await fetch("data/members.json");
        const members = await response.json();
        displayMembers(members);
    } catch (error) {
        console.error("Error loading members:", error);
    }
}

function displayMembers(members) {
    const container = document.getElementById("members");
    container.innerHTML = "";
    members.forEach(member => {
        const card = document.createElement("div");
        card.classList.add("member-card");
        card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name}">
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">${member.website}</a>
      <p>Membership Level: ${member.membership}</p>
    `;
        container.appendChild(card);
    });
}

// Toggle views
document.getElementById("grid-view").addEventListener("click", () => {
    document.getElementById("members").className = "grid";
});
document.getElementById("list-view").addEventListener("click", () => {
    document.getElementById("members").className = "list";
});

loadMembers();