// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Last modified
document.getElementById("last-modified").textContent = document.lastModified;

// Menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
    navMenu.style.display = navMenu.style.display === "flex" ? "none" : "flex";
});

// Example course list
const courses = [
    { code: "WDD 231", name: "Web Frontend Development I", credits: 3 },
    { code: "CSE 340", name: "Web Backend Development", credits: 3 }
];

const courseList = document.getElementById("course-list");
courseList.innerHTML = courses.map(c => `<p>${c.code} - ${c.name} (${c.credits} credits)</p>`).join("");

// Total credits
const totalCredits = courses.reduce((sum, c) => sum + c.credits, 0);
courseList.innerHTML += `<p><strong>Total Credits: ${totalCredits}</strong></p>`;