document.addEventListener('DOMContentLoaded', () => {
  const products = document.querySelectorAll('.product');
  const previewContainer = document.querySelector('.products-preview');

  products.forEach(product => {
      product.addEventListener('click', () => {
          const dataName = product.getAttribute('data-name');
          const previewBox = previewContainer.querySelector(`.preview[data-target="${dataName}"]`);
          
          const imgSrc = product.querySelector('img').src;
          const title = product.querySelector('h3').textContent;
          
          previewBox.querySelector('img').src = imgSrc;
          previewBox.querySelector('h3').textContent = title;

          previewContainer.style.display = 'flex';
          previewBox.classList.add('active');
      });
  });

  previewContainer.addEventListener('click', (event) => {
      if (event.target.classList.contains('fa-times') || event.target === previewContainer) {
          previewContainer.style.display = 'none';
          const activePreview = previewContainer.querySelector('.preview.active');
          if (activePreview) activePreview.classList.remove('active');
      }
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