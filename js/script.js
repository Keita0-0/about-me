// ハンバーガーメニューの開閉
const menuIcon = document.getElementById('menu-icon');
const mobileMenu = document.getElementById('mobile-menu');

menuIcon.addEventListener('click', () => {
    // ハンバーガーアイコンの変形とメニューの表示切り替え
    menuIcon.classList.toggle('change');
    mobileMenu.classList.toggle('active');
});

// TOPに戻るボタンの表示
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
