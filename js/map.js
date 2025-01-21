
// list往左
let logo = document.getElementById('mapIcon');
logo.addEventListener('mouseover', function () {
    this.src = './images/map/logo_bg_hover.svg';
});

logo.addEventListener('mouseout', function () {
    this.src = './images/map/logo_bg.svg';
});



function Close(prop) {
    let list = document.getElementById('list');

    // 檢查目前圖片的 src，並根據不同的 src 切換圖片

    list.style.opacity = 0;

    list.classList.add('slide-out');
    list.classList.remove('slide-in');
    logo.src = "./images/map/logo_bg.svg";
}

function Open() {
    let list = document.getElementById('list');
    list.classList.add('slide-in');
    list.classList.remove('slide-out');
    list.style.opacity = 1;
    logo.src = "./images/map/logo_bg_white.svg";
}



// 舊版是按LOGO打開LIST
// function toggleImage(prop) {
//     let list = document.getElementById('list');

//     // 檢查目前圖片的 src，並根據不同的 src 切換圖片
//     if (prop.src.includes("logo_bg.svg")) {
//         prop.src = "./images/map/logo_bg_white.svg";

//         list.classList.add('slide-in');
//         list.classList.remove('slide-out');
//         list.style.opacity = 1;
//     } else {
//         prop.src = "./images/map/logo_bg.svg";
//         list.style.opacity = 0;

//         list.classList.add('slide-out');
//         list.classList.remove('slide-in');
//     }
// }

// 返回鍵
// const back = document.getElementById('back');

// back.addEventListener('mouseover', function () {
//     this.src = './images/map/goback-hover.svg';
// });

// back.addEventListener('mouseout', function () {
//     this.src = './images/map/goback.svg';
// });



// const map = document.getElementById('map');

// map.addEventListener('click', function () {
//     if (map.className === 'map-listout') {
//         map.classList.add('map-listin');
//         map.classList.remove('map-listout');
//     } else {
//         map.classList.add('map-listout');
//         map.classList.remove('map-listin');

//     }
// });


//彈跳文章分頁
// 選取所有 .addressPosts 和 .popup-content 元素
let posts = document.querySelectorAll('.addressPosts');
let newpage = document.querySelector('.popup-content'); // 假設只會有一個 popup-content
let closeButton = document.querySelector('.close-btn');

let shadow = document.querySelector('#shadow');

// 遍歷每個 .addressPosts 元素，對它們添加點擊事件監聽器
posts.forEach(function(post) {
    post.addEventListener('click', function () {
        if (newpage.style.display === 'block') {
            newpage.style.display = 'none';
            post.style.backgroundColor='var(--white)';
            shadow.style.display = 'none';

        } else {
            newpage.style.display = 'block';
            post.style.backgroundColor='var(--hover-yellow)';
            shadow.style.display = 'block';
        }
    });
    // 
    // 添加對關閉按鈕的點擊事件
closeButton.addEventListener('click', function () {
    // 隱藏 .popup-content
    newpage.style.display = 'none'; // 隱藏 popup-content
    post.style.backgroundColor='var(--white)';
    shadow.style.display = 'none';
});
});





// 點收藏
let collects = document.querySelectorAll('.collect');

collects.forEach(collect => {
    collect.addEventListener('click', () => {
        if (collect.src.includes('collect-new-noframe.svg')) {
            collect.src = './images/collect-new-hover.svg';
        } else {
            collect.src = './images/collect-new-noframe.svg';
        }
    });
});

// 點分享
let shares = document.querySelectorAll('.share');

shares.forEach(share => {
    share.addEventListener('click', () => {
        if (share.src.includes('share-new-noframe.svg')) {
            share.src = './images/share-new-hover.svg';
        } else {
            share.src = './images/share-new-noframe.svg';
        }
    });
});

// 搜尋欄位
document.addEventListener('DOMContentLoaded', function () {
    const searchBar = document.getElementById('search-bar');
    const keywordsContainer = document.getElementById('keywords-container');
    const searchContainer = document.querySelector('.search-container');

    // 當點擊輸入框時，顯示熱門關鍵字
    searchBar.addEventListener('focus', function () {
        keywordsContainer.classList.remove('hidden');
        keywordsContainer.classList.add('visible');
    });

    // 當點擊容器時，隱藏熱門關鍵字
    searchContainer.addEventListener('click', function (e) {
        if (!searchBar.contains(e.target)) {
            keywordsContainer.classList.add('hidden');
            keywordsContainer.classList.remove('visible');
        }
    });

    // 當點擊外部區域時，隱藏熱門關鍵字
    document.addEventListener('click', function (e) {
        if (!searchContainer.contains(e.target)) {
            keywordsContainer.classList.add('hidden');
            keywordsContainer.classList.remove('visible');
        }
    });
});
