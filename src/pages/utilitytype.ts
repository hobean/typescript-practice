// keyof

interface User {
  id: number;
  name: string;
  age: number;
  gender: "m" | "f";
}

type UserKey = keyof User; // 'id' | 'name' | 'age' | 'gender' |

const uk: UserKey = "age";

const a = [1, 2, 3];

const b = a.filter