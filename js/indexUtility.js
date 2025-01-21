const firstContent = document.querySelector('.first-article .content');
const firstFlower = document.querySelector('.first-article .flower img');

firstContent.addEventListener('mouseenter', () => {
    firstFlower.classList.add('rotate-effect');
});

firstContent.addEventListener('mouseleave', () => {
    firstFlower.classList.remove('rotate-effect');
});

const secondContent = document.querySelector('.second-article .content');
const secondFlower = document.querySelector('.second-article .flower img');

secondContent.addEventListener('mouseenter', () => {
    secondFlower.classList.add('rotate-effect');
});

secondContent.addEventListener('mouseleave', () => {
    secondFlower.classList.remove('rotate-effect');
});

const thirdContent = document.querySelector('.third-article .content');
const thirdFlower = document.querySelector('.third-article .flower img');

thirdContent.addEventListener('mouseenter', () => {
    thirdFlower.classList.add('rotate-effect');
});

thirdContent.addEventListener('mouseleave', () => {
    thirdFlower.classList.remove('rotate-effect');
});