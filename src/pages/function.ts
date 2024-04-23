// 함수

// 1
function hello(age: number | undefined, name: string): string {
  // 매개변수로 옵셔널 앞으로 쓰려면
  if (age !== undefined) {
    return `hello, ${name}. You are ${age}`;
  } else {
    return `hello, ${name}`;
  }
}

console.log(hello(30, "SAM"));
console.log(hello(undefined, "SAM"));

function addN(...nums: number[]) {
  return nums.reduce((result, num) => result + num, 0);
}

addN(1, 2, 3); // 6
addN(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // 55

// 2
interface User {
  name: string;
}

const Sam: User = { name: "Sam" };

function showName(this: User, age: number, gender: "m" | "f") {
  console.log(this.name, age, gender);
}

const c = showName.bind(Sam);

c(30, "m");

interface User {
  name: string;
  age: number;
}

// 오버로드
// function join(name: string, age:string): string;
// function join(name: string, age:number): User;
function join(name: string, age: number | string): User | string {
  if (typeof age === "number") {
    return {
      name,
      age,
    };
  } else {
    return "나이는 숫자로 입력해주세요";
  }
}

const sam: User = Join("Sam", 30);
const Jane: string = join("Jane", "30");
