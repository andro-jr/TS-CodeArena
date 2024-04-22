class Vehicle {
  //   color: string = "red";

  constructor(public color: string) {
    // this.color = color;
  }

  public drive(): void {
    console.log("Vroom Vroom");
  }

  protected honk(): void {
    console.log("TITIIIIII");
  }
}

const vehicle = new Vehicle("orange");
console.log(vehicle.color);
// vehicle.drive();

class Car extends Vehicle {
  public driveTest(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car("green");
car.driveTest();
