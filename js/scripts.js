document.addEventListener('DOMContentLoaded', function() {
    const backToTopBtn = document.getElementById('backToTopBtn');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('nav ul');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    hamburgerMenu.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
});