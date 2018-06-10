// Animate smooth scroll - Little help by Ines Serra => http://www.mariainesserra.com

function scrollDown() {
  const y = document.getElementById('images').offsetTop;
  window.scroll({
    top: y,
    behavior: 'smooth'
  });
}
