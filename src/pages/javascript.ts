// 동기 방식은 동시에 여러 작업을 수행할 수는 없지만 돌아가는 흐름이 명확하고 예측하기 쉽다.
// 비동기 방식은 여러 가지 작업을 동시에 수행할 수 있기 때문에 효율성이 좋지만 흐름 예측이 어렵다.

// Promise - 비동기 작업의 단위

// const promise0: Promise<void> = new Promise<void>((resolve, reject) => {
//   resolve();
// });

// promise0
//   .then(() => {
//     console.log("then");
//   })
//   .catch(() => {
//     console.log("catch!");
//   });

// const promise1: Promise<void> = new Promise<void>((resolve, reject) => {
//   resolve();
// });

// function startAsync(age2: number) {
//   return new Promise<void>((resolve, reject) => {
//     if (age2 > 20) resolve();
//     else reject();
//   });
// }

// const promise2 = startAsync(25);
// promise2
//   .then(() => {
//     console.log("1 then!");
//   })
//   .catch(() => {
//     console.log("1 catch!");
//   });

// const promise3 = startAsync(15);
// promise3
//   .then(() => {
//     console.log("2 then!");
//   })
//   .catch(() => {
//     console.log("2 catch!");
//   });

// async: 비동기 작업을 만드는 손쉬운 방법

// 기존
// function startAsync(age2) {
//   return new Promise((resolve, reject) => {
//     if (age2 > 20) resolve(`${age2} success`);
//     else reject(new Error(`${age2} is not over 20`));
//   });
// }

// async function startAsync(age2) {
//     if (age2 > 20) return `${age2} success`;
//     else throw new Error(`${age2} is not over 20`);
//   }

// await
