document.addEventListener("DOMContentLoaded", function () {
  const yourName = document.getElementById("yourName");

  // Change color every second
  setInterval(function () {
    const randomColor = getRandomColor();
    yourName.style.color = randomColor;
  }, 1000);

  // Change color on click
  yourName.addEventListener("click", function () {
    const randomColor = getRandomColor();
    yourName.style.color = randomColor;
  });

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
});
