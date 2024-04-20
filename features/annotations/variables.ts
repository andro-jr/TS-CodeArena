let apples: number | string = 5;

apples = "5";

let color: (string | number)[] = [9, "7"];

class Car {}

let car: Car = new Car();

let point: { x: number; y: string } = {
  x: 4,
  y: "7",
};

const logNumber: (i: number) => void = (i) => {
  console.log(i);
};

// When to use annotations
// 1) When a function returns a an type
const json = '{"x":5,"y":40}';
const cordinates: { x: number; y: number } = JSON.parse(json); // suru ma any return garthyo

// 2) Variable declared but not initialized;
let words = ["red", "green"]; // Type cha
// let test; // any cha
let testWithType: []; // aba array

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
