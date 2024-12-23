const container=document.querySelector('.container');
const LoginLink=document.querySelector('.SignInLink');
const RegisterLink=document.querySelector('.SignUpLink');

RegisterLink.onclick = () => {
    container.classList.add('active');
}

LoginLink.onclick = () => {
    container.classList.remove('active');
}

// Select all toggle-password icons
const togglePasswordIcons = document.querySelectorAll('.toggle-password');

togglePasswordIcons.forEach((icon) => {
    icon.addEventListener('click', () => {
        // Get the target password field
        const targetId = icon.getAttribute('data-target');
        const passwordField = document.getElementById(targetId);

        // Toggle the type attribute
        const isPassword = passwordField.type === 'password';
        passwordField.type = isPassword ? 'text' : 'password';

        // Change the icon based on visibility
        icon.classList.toggle('bx-hide');
        icon.classList.toggle('bx-show');
    });
});

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