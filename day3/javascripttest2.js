let promise = new Promise(function (resolve, reject) {
  //   setTimeout(() => {
  //     resolve("완료");
  //   }, 3000);
  setTimeout(() => {
    reject("거부");
  }, 3000);
  //   setTimeout(() => {
  //     resolve("data");
  //   }, 3000);
});

// promise.then(console.log);
// promise.catch(console.log);

// promise
//   .then((result) => result + " 전송")
//   .then((result) => console.log(result));

promise
  .then((result) => console.log("then: " + result))
  .catch((result) => console.log("catch: " + result));
