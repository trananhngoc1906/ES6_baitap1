const colorList = [
  "green",
  "red",
  "black",
  "orange",
  "purple",
  "blue",
  "silver",
  "yellow",
];

let renderTable = () => {
  let content = "";
  for (let i = 0; i < colorList.length; i++) {
    content += `
<button style="background-color: ${colorList[i]};" class="my-2 btn text-white" onclick="changeColor('${colorList[i]}')" >${colorList[i]}</button>
`;
  }
  document.querySelector("#btn").innerHTML = content;
};

renderTable();

window.changeColor = (color) => {
  document.querySelector("#home").style.color = color;
};

/**
 * Bai tap 2
 */

let calAverage = (arr) => {
  // let sum = 0;
  // if (arr.length) {
  //   for (let i = 0; i < arr.length; i++) {
  //     sum += arr[i];
  //   }
  //   return sum / arr.length;
  // }

  return arr.reduce((total, value) => (total += value), 0) / arr.length;
};

document.querySelector("#btnLop1").onclick = function () {
  let arrInput = document.querySelectorAll("#lop1 input");
  let arr = [];

  arrInput.forEach((item) => (arr = [...arr, item.value * 1]));
  // arrInput.forEach((item) => arr.push(item.value * 1));

  document.querySelector("#hienThiTBLop1").innerHTML = calAverage(arr);
};

document.querySelector("#btnLop2").onclick = function () {
  let arrInput = document.querySelectorAll("#lop2 input");
  let arr = [];

  arrInput.forEach((item) => (arr = [...arr, item.value * 1]));
  // arrInput.forEach((item) => arr.push(item.value * 1));

  document.querySelector("#hienThiTBLop2").innerHTML = calAverage(arr);
};

/**
 * Bai tap 3
 */

let renderText = () => {
  let text = document.querySelector("#text").innerText;
  let arrText = [...text];
  let content = "";

  arrText.forEach(
    (item) =>
      (content += `<span style="display: inline-block; transition: all 0.5s;">${item}</span>`)
  );
  document.querySelector("#text").innerHTML = content;

  let b = document.querySelectorAll("#text span");

  b.forEach((item) => {
    item.addEventListener("mouseover", () => item.classList.add("active"));
    item.addEventListener("mouseout", () => item.classList.remove("active"));
  });
};

renderText();
