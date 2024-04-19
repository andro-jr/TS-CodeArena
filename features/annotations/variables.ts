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
