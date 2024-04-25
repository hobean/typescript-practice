// // 접근 제한자(Acess modifier) - public, private, protected
// // public - 자식 클래스, 클래스 인스턴스 모두 접근 가능
// // protected - 자식 클래스에서 접근 가능
// // private - 해당 클래스 내부에서만 접근 가능

// // class Car {
// //   readonly name2: string = "car";
// //   color: string; // 타입 스크립트는 미리 멤버 변수 선언해야함 혹은 public or readonly
// //   static wheels = 4;
// //   constructor(color: string, name2) {
// //     this.color = color;
// //     this.name2 = name2;
// //   }
// //   start() {
// //     console.log("start");
// //     console.log(this.name2);
// //     console.log(Car.wheels);
// //   }
// // }

// // class Bmw2 extends Car {
// //   constructor(color: string, name2: string) {
// //     super(color, name2);
// //   }

// //   showName() {
// //     console.log(this.name2);
// //   }
// // }

// // const z4 = new Bmw2("black", "zzz4");
// // console.log(z4.name2);
// // // z4.name = "zzzz4";

// // 추상 클래스

// abstract class Car {
//   color: string;
//   constructor(color: string) {
//     this.color = color;
//   }
//   start() {
//     console.log("start");
//   }
//   abstract doSomething(): void;
// }

// // const car = new Car("red"); 추상 클래스는 new 사용 불가

// class Bmw extends Car {
//   constructor(color: string) {
//     super(color);
//   }
//   doSomething(): void {
//     alert(3);
//   }
// }
