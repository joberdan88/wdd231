document.addEventListener("DOMContentLoaded", () => {
    // fill hidden com o timestamp
    const timestampField = document.getElementById("timestamp");
    if (timestampField) {
        timestampField.value = new Date().toISOString();
    }
});