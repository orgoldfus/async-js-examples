function doFirstThing() {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      console.log("First")
      resolve();
    }, 1500)
  );
}

function doSecondThing() {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      console.log("Second")
      resolve();
    }, 2000)
  );
}

function doThirdThing() {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      console.log("Third")
      resolve();
    }, 1000)
  );
}

// 1. How can we make them run sequentially?

// 2. How can we use previous calculations in downstream functions?

// 3. How can we make them run in parallel?

// 4. how do we handle errors?

//#region solution

// async function solution() {
//   await doFirstThing();
//   await doSecondThing();
//   await doThirdThing();
// }

// solution();

//#endregion