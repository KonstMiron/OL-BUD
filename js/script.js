let currentSlide = 0;
const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');

function updateSlider() {
    slides.style.transform = `translateX(-${currentSlide * 100}vw)`;
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

function changeSlide(direction) {
    currentSlide = (currentSlide + direction + 3) % 3;
    updateSlider();
}

/*************  ✨ Codeium Command ⭐  *************/
        /**
         * Change the current slide to the one at the given index.
         * @param {number} index - The index of the slide to change to.
         */
/******  a548375e-cebb-4b2d-b678-c01b730bb11c  *******/function goToSlide(index) {
    currentSlide = index;
    updateSlider();
}

updateSlider();


document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");

    menuToggle.addEventListener("click", function () {
        mobileMenu.style.display = (mobileMenu.style.display === "flex") ? "none" : "flex";
    });
});

function openModal(image) {
    document.getElementById("imageModal").style.display = "flex";
    document.getElementById("modalImage").src = image.src;
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

window.onload = function() {
    document.getElementById("imageModal").style.display = "none";
};




document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let formData = new FormData(this);

    fetch("send_mail.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        document.getElementById("contact-form").reset(); 
    })
    .catch(error => console.error("Помилка:", error));
});