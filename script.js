const body = document.querySelector('body');

body.addEventListener('click', function() {
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  body.style.backgroundColor = randomColor;
});