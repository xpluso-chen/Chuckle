const arrowL = document.querySelector(`.arrow-btn-l`);

arrowL.addEventListener('mouseover', function() {
    this.src = './images/index/button-hover-2.png';
});

arrowL.addEventListener('mouseout', function() {
    this.src = './images/index/button-2.png';
});

const arrowR = document.querySelector(`.arrow-btn-r`);

arrowR.addEventListener('mouseover', function() {
    this.src = './images/index/button-hover-1.png';
});

arrowR.addEventListener('mouseout', function() {
    this.src = './images/index/button-1.png';
});