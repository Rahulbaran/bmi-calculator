/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./js/selectors.js
// SELECTORS
var selectors = {
  weightLabel: document.querySelector(".weight__label"),
  heightLabel: document.querySelector(".height__label"),
  bmiLabel: document.querySelector(".bmi__value"),
  resultBtn: document.querySelector(".btn__result"),
  wtIncrementBtn: document.querySelector(".btn__weight--increment"),
  wtDecrementBtn: document.querySelector(".btn__weight--decrement"),
  htIncrementBtn: document.querySelector(".btn__height--increment"),
  htDecrementBtn: document.querySelector(".btn__height--decrement"),
  bmiCard: document.querySelector(".grid__bmi--card")
};
;// CONCATENATED MODULE: ./js/functions.js
// Function to calculate BMI
var calculateBMI = function calculateBMI(weight, height) {
  return weight * 10000 / Math.pow(height, 2);
};
;// CONCATENATED MODULE: ./js/main.js



var weight, height; // Event Handler for result button

selectors.resultBtn.addEventListener("click", function () {
  var height = +selectors.heightLabel.textContent,
      weight = +selectors.weightLabel.textContent;

  if (typeof height === "number" && typeof weight === "number") {
    var bmi = calculateBMI(weight, height);
    selectors.bmiLabel.textContent = bmi.toPrecision(4); // Setting background color of bmi card

    if (bmi < 18.9) selectors.bmiCard.style.backgroundImage = "linear-gradient(to top right, hsl(30deg, 100%, 50%), hsl(35deg, 100%, 55%))";else if (bmi >= 18.9 && bmi < 25) {
      selectors.bmiCard.style.backgroundImage = "linear-gradient(to top right, hsl(260deg, 100%, 50%), hsl(260deg, 100%, 65%)";
    } else if (bmi > 24.9 && bmi < 30) {
      selectors.bmiCard.style.backgroundImage = "linear-gradient(to top right, hsl(10deg, 100%, 50%), hsl(0deg 100% 55%)";
    } else if (bmi > 29.9 && bmi < 40) {
      selectors.bmiCard.style.backgroundImage = "linear-gradient(to top right, hsl(10deg, 100%, 50%), hsl(0deg 100% 60%)";
    } else {
      selectors.bmiCard.style.backgroundImage = "linear-gradient(to top right, hsl(10deg, 100%, 35%), hsl(0deg 100% 40%)";
    }
  }
}); // Event Handler for weight increment & decrement buttons

selectors.wtIncrementBtn.addEventListener("click", function () {
  weight = +selectors.weightLabel.textContent;
  if (weight < 200) selectors.weightLabel.textContent = ++weight;
});
selectors.wtDecrementBtn.addEventListener("click", function () {
  weight = +selectors.weightLabel.textContent;
  if (weight > 10) selectors.weightLabel.textContent = --weight;
}); // Event Handler for height increment & decrement buttons

selectors.htIncrementBtn.addEventListener("click", function () {
  height = +selectors.heightLabel.textContent;
  if (height < 240) selectors.heightLabel.textContent = ++height;
});
selectors.htDecrementBtn.addEventListener("click", function () {
  height = +selectors.heightLabel.textContent;
  if (height > 30) selectors.heightLabel.textContent = --height;
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztBQUNuQixDQUhEO0FBSUFDLHlDQUFBLENBQW9DLE9BQXBDLEVBQTZDLFlBQU07RUFDakRELE1BQU0sR0FBRyxDQUFDQyxpQ0FBVjtFQUNBLElBQUlELE1BQU0sR0FBRyxFQUFiLEVBQWlCQyxpQ0FBQSxHQUE4QixFQUFFRCxNQUFoQztBQUNsQixDQUhELEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9zZWxlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZnVuY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2pzL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gU0VMRUNUT1JTXG5leHBvcnQgY29uc3Qgc2VsZWN0b3JzID0ge1xuICB3ZWlnaHRMYWJlbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWlnaHRfX2xhYmVsXCIpLFxuICBoZWlnaHRMYWJlbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWlnaHRfX2xhYmVsXCIpLFxuICBibWlMYWJlbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ibWlfX3ZhbHVlXCIpLFxuICByZXN1bHRCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuX19yZXN1bHRcIiksXG4gIHd0SW5jcmVtZW50QnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bl9fd2VpZ2h0LS1pbmNyZW1lbnRcIiksXG4gIHd0RGVjcmVtZW50QnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bl9fd2VpZ2h0LS1kZWNyZW1lbnRcIiksXG4gIGh0SW5jcmVtZW50QnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bl9faGVpZ2h0LS1pbmNyZW1lbnRcIiksXG4gIGh0RGVjcmVtZW50QnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bl9faGVpZ2h0LS1kZWNyZW1lbnRcIiksXG4gIGJtaUNhcmQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ3JpZF9fYm1pLS1jYXJkXCIpXG59O1xuIiwiLy8gRnVuY3Rpb24gdG8gY2FsY3VsYXRlIEJNSVxuZXhwb3J0IGNvbnN0IGNhbGN1bGF0ZUJNSSA9ICh3ZWlnaHQsIGhlaWdodCkgPT4gKHdlaWdodCAqIDEwMDAwKSAvIGhlaWdodCAqKiAyO1xuIiwiaW1wb3J0IFwiLi4vc2Nzcy9tYWluLnNjc3NcIjtcbmltcG9ydCB7IHNlbGVjdG9ycyBhcyBzZWwgfSBmcm9tIFwiLi9zZWxlY3RvcnMuanNcIjtcbmltcG9ydCB7IGNhbGN1bGF0ZUJNSSB9IGZyb20gXCIuL2Z1bmN0aW9ucy5qc1wiO1xuXG5sZXQgd2VpZ2h0LCBoZWlnaHQ7XG5cbi8vIEV2ZW50IEhhbmRsZXIgZm9yIHJlc3VsdCBidXR0b25cbnNlbC5yZXN1bHRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY29uc3QgW2hlaWdodCwgd2VpZ2h0XSA9IFtcbiAgICArc2VsLmhlaWdodExhYmVsLnRleHRDb250ZW50LFxuICAgICtzZWwud2VpZ2h0TGFiZWwudGV4dENvbnRlbnRcbiAgXTtcblxuICBpZiAodHlwZW9mIGhlaWdodCA9PT0gXCJudW1iZXJcIiAmJiB0eXBlb2Ygd2VpZ2h0ID09PSBcIm51bWJlclwiKSB7XG4gICAgY29uc3QgYm1pID0gY2FsY3VsYXRlQk1JKHdlaWdodCwgaGVpZ2h0KTtcbiAgICBzZWwuYm1pTGFiZWwudGV4dENvbnRlbnQgPSBibWkudG9QcmVjaXNpb24oNCk7XG5cbiAgICAvLyBTZXR0aW5nIGJhY2tncm91bmQgY29sb3Igb2YgYm1pIGNhcmRcbiAgICBpZiAoYm1pIDwgMTguOSlcbiAgICAgIHNlbC5ibWlDYXJkLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XG4gICAgICAgIFwibGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgaHNsKDMwZGVnLCAxMDAlLCA1MCUpLCBoc2woMzVkZWcsIDEwMCUsIDU1JSkpXCI7XG4gICAgZWxzZSBpZiAoYm1pID49IDE4LjkgJiYgYm1pIDwgMjUpIHtcbiAgICAgIHNlbC5ibWlDYXJkLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XG4gICAgICAgIFwibGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgaHNsKDI2MGRlZywgMTAwJSwgNTAlKSwgaHNsKDI2MGRlZywgMTAwJSwgNjUlKVwiO1xuICAgIH0gZWxzZSBpZiAoYm1pID4gMjQuOSAmJiBibWkgPCAzMCkge1xuICAgICAgc2VsLmJtaUNhcmQuc3R5bGUuYmFja2dyb3VuZEltYWdlID1cbiAgICAgICAgXCJsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCBoc2woMTBkZWcsIDEwMCUsIDUwJSksIGhzbCgwZGVnIDEwMCUgNTUlKVwiO1xuICAgIH0gZWxzZSBpZiAoYm1pID4gMjkuOSAmJiBibWkgPCA0MCkge1xuICAgICAgc2VsLmJtaUNhcmQuc3R5bGUuYmFja2dyb3VuZEltYWdlID1cbiAgICAgICAgXCJsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCBoc2woMTBkZWcsIDEwMCUsIDUwJSksIGhzbCgwZGVnIDEwMCUgNjAlKVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWwuYm1pQ2FyZC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxuICAgICAgICBcImxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsIGhzbCgxMGRlZywgMTAwJSwgMzUlKSwgaHNsKDBkZWcgMTAwJSA0MCUpXCI7XG4gICAgfVxuICB9XG59KTtcblxuLy8gRXZlbnQgSGFuZGxlciBmb3Igd2VpZ2h0IGluY3JlbWVudCAmIGRlY3JlbWVudCBidXR0b25zXG5zZWwud3RJbmNyZW1lbnRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgd2VpZ2h0ID0gK3NlbC53ZWlnaHRMYWJlbC50ZXh0Q29udGVudDtcbiAgaWYgKHdlaWdodCA8IDIwMCkgc2VsLndlaWdodExhYmVsLnRleHRDb250ZW50ID0gKyt3ZWlnaHQ7XG59KTtcbnNlbC53dERlY3JlbWVudEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICB3ZWlnaHQgPSArc2VsLndlaWdodExhYmVsLnRleHRDb250ZW50O1xuICBpZiAod2VpZ2h0ID4gMTApIHNlbC53ZWlnaHRMYWJlbC50ZXh0Q29udGVudCA9IC0td2VpZ2h0O1xufSk7XG5cbi8vIEV2ZW50IEhhbmRsZXIgZm9yIGhlaWdodCBpbmNyZW1lbnQgJiBkZWNyZW1lbnQgYnV0dG9uc1xuc2VsLmh0SW5jcmVtZW50QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGhlaWdodCA9ICtzZWwuaGVpZ2h0TGFiZWwudGV4dENvbnRlbnQ7XG4gIGlmIChoZWlnaHQgPCAyNDApIHNlbC5oZWlnaHRMYWJlbC50ZXh0Q29udGVudCA9ICsraGVpZ2h0O1xufSk7XG5zZWwuaHREZWNyZW1lbnRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgaGVpZ2h0ID0gK3NlbC5oZWlnaHRMYWJlbC50ZXh0Q29udGVudDtcbiAgaWYgKGhlaWdodCA+IDMwKSBzZWwuaGVpZ2h0TGFiZWwudGV4dENvbnRlbnQgPSAtLWhlaWdodDtcbn0pO1xuIl0sIm5hbWVzIjpbInNlbGVjdG9ycyIsIndlaWdodExhYmVsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaGVpZ2h0TGFiZWwiLCJibWlMYWJlbCIsInJlc3VsdEJ0biIsInd0SW5jcmVtZW50QnRuIiwid3REZWNyZW1lbnRCdG4iLCJodEluY3JlbWVudEJ0biIsImh0RGVjcmVtZW50QnRuIiwiYm1pQ2FyZCIsImNhbGN1bGF0ZUJNSSIsIndlaWdodCIsImhlaWdodCIsInNlbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0ZXh0Q29udGVudCIsImJtaSIsInRvUHJlY2lzaW9uIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiXSwic291cmNlUm9vdCI6IiJ9