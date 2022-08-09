import "../scss/main.scss";
import { selectors as sel } from "./selectors.js";
import { calculateBMI } from "./functions.js";

let weight, height;

// Event Handler for result button
sel.resultBtn.addEventListener("click", () => {
  const [height, weight] = [
    +sel.heightLabel.textContent,
    +sel.weightLabel.textContent
  ];

  if (typeof height === "number" && typeof weight === "number") {
    const bmi = calculateBMI(weight, height);
    sel.bmiLabel.textContent = bmi.toPrecision(4);

    // Setting background color of bmi card
    if (bmi < 18.9)
      sel.bmiCard.style.backgroundImage =
        "linear-gradient(to top right, hsl(30deg, 100%, 50%), hsl(35deg, 100%, 55%))";
    else if (bmi >= 18.9 && bmi < 25) {
      sel.bmiCard.style.backgroundImage =
        "linear-gradient(to top right, hsl(260deg, 100%, 50%), hsl(260deg, 100%, 65%)";
    } else if (bmi > 24.9 && bmi < 30) {
      sel.bmiCard.style.backgroundImage =
        "linear-gradient(to top right, hsl(10deg, 100%, 50%), hsl(0deg 100% 55%)";
    } else if (bmi > 29.9 && bmi < 40) {
      sel.bmiCard.style.backgroundImage =
        "linear-gradient(to top right, hsl(10deg, 100%, 50%), hsl(0deg 100% 60%)";
    } else {
      sel.bmiCard.style.backgroundImage =
        "linear-gradient(to top right, hsl(10deg, 100%, 35%), hsl(0deg 100% 40%)";
    }
  }
});

// Event Handler for weight increment & decrement buttons
sel.wtIncrementBtn.addEventListener("click", () => {
  weight = +sel.weightLabel.textContent;
  if (weight < 200) sel.weightLabel.textContent = ++weight;
});
sel.wtDecrementBtn.addEventListener("click", () => {
  weight = +sel.weightLabel.textContent;
  if (weight > 10) sel.weightLabel.textContent = --weight;
});

// Event Handler for height increment & decrement buttons
sel.htIncrementBtn.addEventListener("click", () => {
  height = +sel.heightLabel.textContent;
  if (height < 240) sel.heightLabel.textContent = ++height;
});
sel.htDecrementBtn.addEventListener("click", () => {
  height = +sel.heightLabel.textContent;
  if (height > 30) sel.heightLabel.textContent = --height;
});
