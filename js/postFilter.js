// 點地點讓他消失或顯示
let typeTitle1 = document.getElementById('type-title1');
let containerBody = document.getElementById('container-body');

typeTitle1.addEventListener('click', () => {
if (containerBody.style.display === 'block') {
  containerBody.style.display = 'none';
} else {
  containerBody.style.display = 'block';
}
});

// 點分類讓他消失或顯示
let typeTitle2 = document.getElementById('type-title2');
let typeBody = document.getElementById('type-body');

typeTitle2.addEventListener('click', () => {
if (typeBody.style.display === 'block') {
  typeBody.style.display = 'none';
} else {
  typeBody.style.display = 'block';
}
});


// 讓台北市container0打開信義區中山區inOder0
let container0 = document.getElementById('container0');
let inOder0 = document.getElementById('inOder0');

container0.addEventListener('click', () => {
if (inOder0.style.display === 'block') {
  inOder0.style.display = 'none';
} else {
  inOder0.style.display = 'block';
}
});