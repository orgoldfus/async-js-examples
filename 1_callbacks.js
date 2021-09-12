function doFirstThing() {
  setTimeout(() => console.log("First"), 1500);
}

function doSecondThing() {
  setTimeout(() => console.log("Second"), 2000);
}

function doThirdThing() {
  setTimeout(() => console.log("Third"), 1000);
}

doFirstThing();
doSecondThing();
doThirdThing();

// 1. How can we make them run sequentially?

// 2. How can we use previous calculations in downstream functions?

// 3. How can we make them run in parallel?

//#region solution

// function doFirstThing(cb) {
//   setTimeout(() => {
//     console.log("First")
//     cb();
//   }, 1500);
// }

// function doSecondThing(cb) {
//   setTimeout(() => {
//     console.log("Second")
//     cb();
//   }, 2000);
// }

// function doThirdThing() {
//   setTimeout(() => {
//     console.log("Third")
//   }, 1000);
// }

// doFirstThing(
//   () => doSecondThing(
//     () => doThirdThing()
//   )
// );

//#endregion