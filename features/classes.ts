class Vehicle {
  drive(): void {
    console.log("Vroom Vroom");
  }

  honk(): void {
    console.log("TITIIIIII");
  }
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();
