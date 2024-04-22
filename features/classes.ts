class Vehicle {
  public drive(): void {
    console.log("Vroom Vroom");
  }

  protected honk(): void {
    console.log("TITIIIIII");
  }
}

const vehicle = new Vehicle();
// vehicle.drive();

class Car extends Vehicle {
  public driveTest(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car();
car.driveTest();
