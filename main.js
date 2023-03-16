const timeID = setInterval(hi, 0.0000000000000000000000000000000000000000000000000000000000000000000000000001);

function hi() {
  for (let x = 1; x < 225; x++) {
    randomColor = [
      Math.floor(Math.random() * 266),
      Math.floor(Math.random() * 266),
      Math.floor(Math.random() * 266),
    ];
    document.querySelector(".rect:nth-child(" + x + ")").style.backgroundColor =
      "rgb(" +
      randomColor[0] +
      "," +
      randomColor[1] +
      "," +
      randomColor[2] +
      ")";
    left = Math.random() * 110 + "%";
    bottom = Math.random() * 120 + "%";
    document.querySelector(".rect:nth-child(" + x + ")").style.left = left;
    document.querySelector(".rect:nth-child(" + x + ")").style.bottom = bottom;
  }
}