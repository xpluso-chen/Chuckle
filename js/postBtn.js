// 點喜歡
let love = document.getElementById('love');
let isClicked = false; // 用來追蹤是否點擊過

love.addEventListener('click', () => {
    isClicked = !isClicked; // 點擊後切換狀態
    if (isClicked) {
        love.src = './images/Love-new-hover.svg';
    } else {
        love.src = './images/Love-new.svg';
    }
});

love.addEventListener('mouseenter', () => {
    if (!isClicked) {
        love.src = './images/Love-new-hover.svg';
    }
});

love.addEventListener('mouseleave', () => {
    if (!isClicked) {
        love.src = './images/Love-new.svg';
    }
});


// 點收藏
let collect = document.getElementById('collect');
let isClicked2 = false; // 用來追蹤是否點擊過

collect.addEventListener('click', () => {
    isClicked2 = !isClicked2; // 點擊後切換狀態
    if (isClicked2) {
        collect.src = './images/collect-new-hover.svg';
    } else {
        collect.src = './images/collect-new.svg';
    }
});

collect.addEventListener('mouseenter', () => {
    if (!isClicked2) {
        collect.src = './images/collect-new-hover.svg';
    }
});

collect.addEventListener('mouseleave', () => {
    if (!isClicked2) {
        collect.src = './images/collect-new.svg';
    }
});


// 點分享
let share = document.getElementById('share');

share.addEventListener('click', () => {
    if (share.src.includes('share-new.svg')) {
        share.src = './images/share-new-hover.svg';
    } else {
        share.src = './images/share-new.svg';
    }
});