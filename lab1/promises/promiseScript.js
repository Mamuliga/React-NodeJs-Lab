let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Resolved");
  }, 6000);
});

//Before call back
console.log("Before Callback");

myPromise.then((successMessage) => {
  console.log("From call back: " + successMessage);
});

//After call back
console.log("After Callback");

let promiseExample = new Promise((resolve, reject) => {
  try {
    resolve("Promise Resolved");
  } catch (e) {
    reject("Error " + e);
  }
});
