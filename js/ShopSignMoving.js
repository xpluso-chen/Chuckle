//滾輪移動時觸發
document.addEventListener('scroll', function () {
    updatePositionByDistance();
});

//視窗大小縮放時觸發
window.addEventListener('resize', () => {
    updatePositionByDistance();
});

//更新招牌定位方式與位置
function updatePositionByDistance() {
    var shopSignLeft = document.querySelector('.shop-sign-left');
    var shopSignRight = document.querySelector('.shop-sign-right');
    var shopSignTop = shopSignLeft.getBoundingClientRect().top;

    if (shopSignTop <= 0) {
        shopSignLeft.style.position = 'fixed';
        shopSignLeft.style.top = '0';

        shopSignRight.style.position = 'fixed';
        shopSignRight.style.top = '0';
    }

    var banner = document.querySelector('.banner');

    var bannerRect = banner.getBoundingClientRect();
    var shopSignRect = shopSignLeft.getBoundingClientRect();

    var verticalDistance = shopSignRect.top - bannerRect.bottom;

    let top = 400 * (window.innerWidth / 1980);
    //根據平板 banner 高度進行補正
    if (window.innerWidth <= 430) {
        top += 620;
    } else if (window.innerWidth <= 860) {
        top += 220;
    }

    if (verticalDistance < -15) {
        shopSignLeft.style.position = 'absolute';
        shopSignLeft.style.top = `${top}px`;

        shopSignRight.style.position = 'absolute';
        shopSignRight.style.top = `${top}px`;
    }
}
