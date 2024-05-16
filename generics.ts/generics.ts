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
