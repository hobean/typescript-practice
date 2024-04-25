// Generic - 타입의 일반화, 클래스 내부에서 개별적으로 타입을 지정하는 것이 아니라, 외부에서 지정하게끔 일반화시켜두는 것
// 장점 1. 재사용성, 2. 컴파일시 타입 에러 발견, 3. 형변환의 과정 생략, 4. 개발 시 생산성 향상

// // getSize의 매개변수가 늘어날수록 명시해줘야함
// function getSize(arr: number[] | string[] | boolean[] | object[]): number {
//   return arr.length;
// }

// const arr1 = [1, 2, 3];
// getSize(arr1); // 3

// const arr2 = ["a", "b", "c"];
// getSize(arr2); // 3

// const arr3 = [false, true, true];
// getSize(arr3); // 3

// const arr4 = [{}, {}, { name: "Tim" }];
// getSize(arr4); // 3

function getSize<T>(arr: T[]): number {
  return arr.length;
}

const arr1 = [1, 2, 3];
getSize<number>(arr1); // 3

const arr2 = ["a", "b", "c"];
getSize<string>(arr2); // 3

const arr3 = [false, true, true];
getSize(arr3); // 3

const arr4 = [{}, {}, { name: "Tim" }];
getSize(arr4); // 3

interface Mobile<T> {
  name: string;
  price: number;
  //   option: any;
  option: T;
}

const m1: Mobile<{ color: string; coupon: boolean }> = {
  name: "s21",
  price: 1000,
  option: {
    color: "red",
    coupon: false,
  },
};

const m2: Mobile<string> = {
  name: "s20",
  price: 900,
  option: "good",
};
