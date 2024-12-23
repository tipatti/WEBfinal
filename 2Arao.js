// JavaScript to toggle the visibility of contact information
function toggleContactInfo() {
    const contactInfo = document.getElementById('contact-info');
    if (contactInfo.style.display === "none") {
        contactInfo.style.display = "block";
    } else {
        contactInfo.style.display = "none";
    }
}
