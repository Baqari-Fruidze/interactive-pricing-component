// - 10K pageviews / $8 per month
// - 50K pageviews / $12 per month
// - 100K pageviews / $16 per month
// - 500k pageviews / $24 per month
// - 1M pageviews / $36 per month
const checker = document.querySelector(".switch");
const slider = document.querySelector(".slider");

const pageviewSpan = document.querySelector(".hundredK");
const moneyPermonth = document.querySelector(".sixteen");
const monthSpan = document.querySelector(".month");
let checkBox = document.querySelector(".checkbox");

let arr = [
  {
    view: "10K pageviews",
    off: {
      amount: "$8.00",
    },
    on: { amount: "$72.00" },
  },
  {
    view: "50K pageviews",
    off: {
      amount: "$12.00",
    },
    on: { amount: "$108.00" },
  },
  {
    view: "100K pageviews",
    off: {
      amount: "$16.00",
    },
    on: { amount: "$144.00" },
  },
  {
    view: "500K pageviews",
    off: {
      amount: "$24.00",
    },
    on: { amount: "$216.00" },
  },
  {
    view: "1m pageviews",
    off: {
      amount: "$36.00",
    },
    on: { amount: "$324.00" },
  },
];
let inputValue = 3;
slider.addEventListener("input", (event) => {
  inputValue = Number(event.target.value);
  moneyPermonth.textContent = arr[inputValue].off.amount;
  pageviewSpan.textContent = arr[inputValue].view;
  let checked = checkBox.checked;
});
checkBox.addEventListener("change", () => {
  let checked = checkBox.checked;
  if (checked) {
    moneyPermonth.textContent = arr[inputValue].on.amount;
    monthSpan.textContent = "/ year";
  } else {
    moneyPermonth.textContent = arr[inputValue].off.amount;
    monthSpan.textContent = "/ month";
  }
});

// slider.oninput = function () {
//   var value = (this.value - this.min) / (this.max - this.min);
//   var percent = value * 100;

//   this.style.background =
//     "linear-gradient(to right, #4CAF50 0%, #4CAF50 " +
//     percent +
//     "%, #d3d3d3 " +
//     percent +
//     "%, #d3d3d3 100%)";
// };

// slider.oninput = function () {
//   var value = (this.value - this.min) / (this.max - this.min);
//   var percent = value * 100;

//   this.style.background =
//     "linear-gradient(to right, #4CAF50 0%, #4CAF50 " +
//     percent +
//     "%, #d3d3d3 " +
//     percent +
//     "%, #d3d3d3 100%)";

//   var sliderLine = document.querySelector(".slider-line");
//   sliderLine.style.width = percent + "%";
// };

let sliderLine = document.querySelector(".xazi");
slider.oninput = function () {
  value = (this.value - this.min) / (this.max - this.min);
  let percent = value * 100;

  this.style.background = `linear-gradient(
    to right,
    #a4f3eb 0%,
    #a4f3eb ${percent}%,
    #d3d3d3 ${percent}%,
    #d3d3d3 100%
  )`;
};
