
document.onclick = makeDiv;

function makeDiv(elem) {
  const location = document.querySelector(".coordinates");
  const color = '#' + Math.round(0xffffff * Math.random()).toString(16);
  const dimentions = Math.floor((Math.random() * 50) + 10);
  let circle = document.createElement("div");
  circle.classList.add("circle");
  circle.style.width = dimentions + "px";
  circle.style.height = dimentions + "px";
  circle.style.backgroundColor = color;
  circle.style.top = (elem.clientY - 50) + "px";
  circle.style.left = (elem.clientX - 50) + "px";
  document.querySelector("article").appendChild(circle);
}

