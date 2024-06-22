class Boat {
  color: string = "red";

  get formattedcolor(): string {
    return `This boats color is ${this.color}`;
  }

  @testDecorator
  pilot(): void {
    console.log("swish");
  }
}

function testDecorator(target: any, key: any): void {
  console.log("key :", key);
  console.log("target :", target);
}
