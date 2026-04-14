//print hello after 4 s

// setTimeout(() => {
//   console.log("Hello");
// }, 4000);

// function getData(dataId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       resolve("success");
//     }, 2000);
//   });
// }
//promisechain

// getData(1).then((res)=>{
//     console.log(res)
//     getData(2).then(()=>{
//         console.log(res)
//     })
// })

//More better way of promise chain

// getData(1)
//   .then((res) => {
//     return getData(2);
//   })
//   .then((res) => {
//     return getData(3);
//   })
//   .then((res) => {
//     console.log(res);
//   });

//callback Hell

// getData(1, () => {
//   getData(2, () => {
//     getData(3);
//   });
// });

//promise that data is successfully delivered

// let promise = new Promise((resolve, reject) =>{
// console.log("Promise");
//     resolve("123");
// })  ;

// function getData(dataId, getNextData) {
//   return new Promise((resolve, reject) =>{
//       setTimeout(() => {
//     console.log("data", dataId);
//     resolve("success");
//     if (getNextData) {
//       getNextData();
//     }
//   }, 2000);
// });
// }

//promise catch .... then
// const getPromise = ()=>{
// return new Promise((resolve, reject) =>{
// console.log("Promise");
//     // resolve("succcess", res);
//     reject("net error");
// })  ;

// }

// let promise = getPromise();
// promise.then((res)=>{
// console.log("Prmoise fulfilled")
// })

// promise.catch((err)=>{
//     console.log("rejected", err)
// })

// function async1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("1");
//       resolve("Success");
//     }, 4000);
//   });
// }
// function async2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("H2");
//       resolve("Success");
//     }, 4000);
//   });
// }

// console.log("Fetching Data 1");
// async1().then(res =>{
//  console.log("Fetching Data 2");
// async2().then(res =>{});

// })

//promisechain

// let p1 = async1();
// p1.then((res) => {
//   console.log(res);
//   console.log("Fetching Data 2");
//   let p2 = async2();
// p2.then((res) => {
//   console.log(res);
// });

// });

// console.log("Fetching Data 2");

// let p2 = async2();
// p1.then((res) => {
//   console.log(res);
// });

//async and await

function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("WeatherData");
      resolve(200);
    }, 2000);
  });
}

async function getweatherdata() {
  await api(); // 1 call
  await api(); // 2 call
}

function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
    }, 2000);
  });
}

//async await

async function getAlldata() {
  await getData(1);
  await getData(2);
  await getData(3);
}

//IIFE

(async function() {
  await getData(1);
  await getData(2);
  await getData(3);
})();

