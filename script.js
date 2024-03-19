// - 10K pageviews / $8 per month
// - 50K pageviews / $12 per month
// - 100K pageviews / $16 per month
// - 500k pageviews / $24 per month
// - 1M pageviews / $36 per month
const slider = document.querySelector(".slider");

const pageviewSpan = document.querySelector(".hundredK");
const moneyPermonth = document.querySelector(".sixteen");

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

slider.addEventListener("input", () => {
  for (let i = 0; i <= 5; i++) {
    if (slider.value === "0") {
      pageviewSpan.textContent = viewArr[i];
    }
  }
});

// slider.addEventListener("input", function () {
//   const value = slider.value;
//   const leftPosition = `calc(${value}% - 1rem)`;
//   sliderButton.style.left = leftPosition;
// });

// slider.oninput = function () {
//   var value = (this.value - this.min) / (this.max - this.min);
//   var percent = value * 100;

//   this.style.background =
//     "linear-gradient(to right, #4CAF50 0%, #4CAF50 " +
//     percent +
//     "%, #d3d3d3 " +
//     percent +
//     "%, #d3d3d3 100%)";

// დავძებნო ფსევდო ელემენტი thumb input value ti vwevdebit slaiders
