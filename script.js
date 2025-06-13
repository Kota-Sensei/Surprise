const colors = ['#ff9a9e', '#fad0c4', '#a18cd1', '#fbc2eb', '#f6d365', '#96e6a1', '#84fab0', '#8fd3f4'];
let index = 0;

function changeBackground() {
  document.body.style.background = colors[index];
  index = (index + 1) % colors.length;
}

setInterval(changeBackground, 3000);
