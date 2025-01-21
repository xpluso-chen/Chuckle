// #region 自適應顏色與背景縮放
//取得背景顏色
const bodyStyle = getComputedStyle(document.body);
const backgroundColor = bodyStyle.backgroundColor;

// 取得根元素（:root）的樣式
const rootStyle = getComputedStyle(document.documentElement);
const black = rootStyle.getPropertyValue('--black');
const white = rootStyle.getPropertyValue('--white');

//取得需要變色的文字 contrast-text
const contrastTexts = document.querySelectorAll(".contrast-text");

//取得需要變色的文字
const texts = document.querySelectorAll(".navigation .menu>a");

//取得漢堡按鈕
const bars = document.querySelectorAll(".navigation .hamburger .bar");

// 根據背景顏色改變導覽列顏色
if (backgroundColor == black) {
    updateColor(contrastTexts, white);

    bars.forEach(bar => {
        bar.style.backgroundColor = white;
    });
}

let scrollYisZero;
window.addEventListener('scroll', function () {
    if (window.scrollY > 0 && scrollYisZero != false) {
        scrollYisZero = false;
        document.documentElement.style.setProperty('--navbg-width', `550px`);

        if (backgroundColor == black) {
            document.documentElement.style.setProperty('--border-color', black);
            updateColor(texts, black);
        }
    }
    else if (window.scrollY == 0 && scrollYisZero != true) {
        scrollYisZero = true;
        document.documentElement.style.setProperty('--navbg-width', 0);

        if (backgroundColor == black) {
            document.documentElement.style.setProperty('--border-color', white);
            updateColor(texts, white);
        }
    }
});


function updateColor(texts, color) {
    texts.forEach(text => {
        text.style.color = color;
    });
}
// #endregion

// #region 開關會員視窗
const searchModal = document.getElementById("search-modal");
const searchModalCheckbox = document.getElementById("search-modal-switch");

const memberModal = document.getElementById("member-modal");
const memberModalCheckbox = document.getElementById("member-modal-switch");

const memberModalBtn = document.getElementById("member-modal-btn");
const blackBoard = document.querySelector(".black-board");

memberModal.style.display = "none";

memberModalCheckbox.addEventListener('click', () => {
    if (memberModal.style.display == "none") {
        memberModal.style.display = "flex";
        blackBoard.style.display = "block";
    }
    else {
        memberModal.style.display = "none";
        blackBoard.style.display = "none";
    }
});

//平板以下尺寸
memberModalBtn.addEventListener('click', () => {
    if (memberModal.style.display == "none") {
        memberModal.style.display = "flex";
        blackBoard.style.display = "block";
    }
});

const closeMemberModalBtn = document.getElementById("close-member-modal");
closeMemberModalBtn.addEventListener('click', () => {
    memberModal.style.display = "none";
    blackBoard.style.display = "none";
});
// #endregion

// #region 開關搜尋列
searchModal.style.display = "none";

searchModalCheckbox.addEventListener('change', () => {
    if (searchModalCheckbox.checked) {
        searchModal.style.display = "block";

        memberModalCheckbox.checked = false;
        memberModal.style.display = "none";
    }
    else {
        searchModal.style.display = "none";
    }
});
// #endregion

// #region hover換圖
const mapIcon = document.querySelector(`.icon-map`);

mapIcon.addEventListener('mouseover', function () {
    this.src = './images/navbar/icon-map-hover.svg';
});

mapIcon.addEventListener('mouseout', function () {
    this.src = './images/navbar/icon-map.svg';
});

const searchIcon = document.querySelector(`.icon-search`);

searchIcon.addEventListener('mouseover', function () {
    this.src = './images/navbar/icon-search-hover.svg';
});

searchIcon.addEventListener('mouseout', function () {
    this.src = './images/navbar/icon-search.svg';
});

const memberIcon = document.querySelector(`.icon-member`);

memberIcon.addEventListener('mouseover', function () {
    this.src = './images/navbar/icon-member-hover.svg';
});

memberIcon.addEventListener('mouseout', function () {
    this.src = './images/navbar/icon-member.svg';
});
// #endregion

// #region 漢堡按鈕控制
var hamburgers = document.querySelectorAll('.hamburger');

hamburgers.forEach(function (hamburger) {
    hamburger.addEventListener('click', function () {
        this.classList.toggle('is-active');

        const navigation = document.querySelector('.nav-list-v');
        if (navigation.classList.contains('show')) {
            navigation.classList.remove('show');
        } else {
            navigation.classList.add('show');
        }
    });
});
// #endregion

// #region 視窗大小縮放偵測
window.addEventListener('resize', () => {
    if (document.body.clientWidth > 820) {
        const navigation = document.querySelector('.nav-list-v');
        if (navigation.classList.contains('show')) {
            navigation.classList.remove('show');
        }

        const hamburgers = document.querySelectorAll('.hamburger');
        hamburgers.forEach(function (hamburger) {
            hamburger.classList.remove('is-active');
        });
    }
    else {
        memberModalCheckbox.checked = false;
        searchModalCheckbox.checked = false;

        memberModal.style.display = "none";
        searchModal.style.display = "none";
        blackBoard.style.display = "none";
    }
});
// #endregion