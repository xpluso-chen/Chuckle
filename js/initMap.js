let list = document.getElementById('list');
let logoo = document.getElementById('mapIcon');

document.addEventListener("DOMContentLoaded", async function () {
    const jsonPath = document.getElementById('map').getAttribute('data-json-path');

    //取得 marker 資料
    const response = await fetch(jsonPath);
    const markersData = await response.json();
    

    async function initMap() {
        //地圖中心點座標
        const position = { lat: 25.042827, lng: 121.524863 };

        // Request needed libraries.
        //@ts-ignore
        const { Map } = await google.maps.importLibrary("maps");
        const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

        let map = new Map(document.getElementById("map"), {
            zoom: 14,
            center: position,
            mapId: "4422581b7cba5492",
            disableDefaultUI: true,
            zoomControl: true
        });

        markersData.forEach((data) => {
            //之後寫css class 控制樣式比較好
            const img = document.createElement("img");
            img.style.width = "90%";
            img.src = data.imgSrc;
            img.alt = "地標";

            const marker = new AdvancedMarkerElement({
                map: map,
                position: data.position,
                content: img,
                title: data.title,
            });

            
            marker.addListener("click", () => {
                //如果資料帶有連結則打開連結
                if (data.url) {
                    window.open(data.url, '_blank');

                    
                    
                }
                else {
                    //地圖頁的視窗開關寫這裡
                    // 打開list
                    list.classList.add('slide-in');
                    list.classList.remove('slide-out');
                    list.style.opacity = 1;
                    // LOGO圖案也變白底版(不知道為甚麼掛了)
                    logoo.src = "./images/map/logo_bg_white.svg";
                }
            });
        });
    }

    initMap();
});