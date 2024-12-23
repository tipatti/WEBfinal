function toggleFAQ(faqNumber) {
    const answer = document.getElementById(`faq-answer-${faqNumber}`);
    const questionButton = document.querySelector(`[onclick="toggleFAQ(${faqNumber})"]`);

    if (answer) {
        const isVisible = answer.style.display === "block";
        answer.style.display = isVisible ? "none" : "block";

        // Update aria-expanded attribute
        questionButton.setAttribute("aria-expanded", !isVisible);
    }
}

const navBar = document.querySelector("nav"),
          menuBtns = document.querySelectorAll(".menu-icon"),
          overlay = document.querySelector(".overlay");
  
        menuBtns.forEach((menuBtn) => {
          menuBtn.addEventListener("click", () => {
            navBar.classList.toggle("open");
          });
        });
  
        overlay.addEventListener("click", () => {
          navBar.classList.remove("open");
        });