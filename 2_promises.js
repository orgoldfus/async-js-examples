function doFirstThing(cb) {
  setTimeout(() => {
    console.log("First")
    cb();
  }, 1500);
}

function doSecondThing(cb) {
  setTimeout(() => {
    console.log("Second")
    cb();
  }, 2000);
}

function doThirdThing() {
  setTimeout(() => {
    console.log("Third")
  }, 1000);
}

doFirstThing(
  () => doSecondThing(
    () => doThirdThing()
  )
);

// 1. How can we make them run sequentially without callbacks?

// 2. How can we use previous calculations in downstream functions?

// 3. How can we make them run in parallel?

// 4. how do we handle errors?

//#region solution

// function doFirstThing() {
//   return new Promise((resolve, reject) =>
//     setTimeout(() => {
//       console.log("First")
//       resolve();
//     }, 1500)
//   );
// }

// function doSecondThing() {
//   return new Promise((resolve, reject) =>
//     setTimeout(() => {
//       console.log("Second")
//       resolve();
//     }, 2000)
//   );
// }

// function doThirdThing() {
//   return new Promise((resolve, reject) =>
//     setTimeout(() => {
//       console.log("Third")
//       resolve();
//     }, 1000)
//   );
// }

// doFirstThing()
//   .then(() => doSecondThing())
//   .then(() => doThirdThing());

// Promise.all([doFirstThing(), doSecondThing(), doThirdThing()])
//   .then(() => console.log('DONE!'));

//#endregion