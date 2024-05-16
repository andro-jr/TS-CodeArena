class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}
class ArrayOfString {
  constructor(public collection: string[]) {}

  getindexAtNumber(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  getindexAtNumber(index: number): T {
    return this.collection[index];
  }
}

new ArrayOfAnything<string>(["a", "g", "g"]);
new ArrayOfAnything(["a", "g", "g", 5, 6]);

// Generics with functions

const printStrings = (arr: string[]): void => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};
const printNumbers = (arr: number[]): void => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};
const printAnything = <T>(arr: T[]) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};

printAnything(["t", "t", "ff"]);

// Generic Constraints
class Animal {
  print(): void {
    console.log("I am a animal");
  }
}
class Human {
  print(): void {
    console.log("I am a human");
  }
}

interface Printable {
  print(): void;
}

function printAnimalorHuman<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}
