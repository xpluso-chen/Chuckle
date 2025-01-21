const btns = document.querySelectorAll('#newinfo-nav a');
const figures = document.querySelectorAll('.characters figure');

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('mouseenter', () => {
        if (!figures[i].classList.contains('showall')) {
            figures[i].style.animation = 'moveUpAndDown 0.6s ease-in-out infinite';
        }
    });

    btns[i].addEventListener('mouseleave', () => {
        figures[i].style.animation = 'none';
    });
}


