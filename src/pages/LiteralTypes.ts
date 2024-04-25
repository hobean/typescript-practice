// // Literal Types

// const userName1 = "Bob";
// let userName2: string | number = "Tom";
// userName2 = 3;

// type Job = "police" | "developer" | "teacher";

// interface User2 {
//   name: string;
//   job: string;
// }

// const user: User2 = {
//   name: "Bob",
//   job: "deveoloper",
// };

// interface HighSchoolStudent {
//   name: number | string;
//   grade: 1 | 2 | 3;
// }

// // Union Types

// interface Car {
//   name: "Car";
//   color: string;
//   start(): void;
// }

// interface Mobile {
//   name: "Mobile";
//   color: string;
//   call(): void;
// }

// function getGift(gift: Car | Mobile) {
//   console.log(gift.color);
//   if (gift.name === "Car") {
//     gift.start();
//   } else {
//     gift.call();
//   }
// }

// // Intersection Types

// interface Car2 {
//   name: string;
//   start(): void;
// }

// interface Toy {
//   name: string;
//   color: string;
//   price: number;
// }

// const toyCar: Toy & Car2 = {
//   name: "타요",
//   start() {},
//   color: "blue",
//   price: 1000,
// };
