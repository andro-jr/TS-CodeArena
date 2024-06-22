class Boat {
  color: string = "red";

  get formattedcolor(): string {
    return `This boat's color is ${this.color}`;
  }

  @testDecorator
  pilot(): void {
    console.log("swish");
  }
}

function testDecorator(
  target: any,
  context: ClassMethodDecoratorContext
): void {
  console.log("target:", target);
  console.log("context:", context);
}
