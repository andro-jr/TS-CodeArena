interface Vehicle {
  model: string;
  year: number;
  broken: true;
  summary(): void;
}

const oldCiviv: Vehicle = {
  model: "RR677",
  year: 2000,
  broken: true,
  summary() {
    console.log("Summary Printed");
  },
};

const printVehicle = (vehicle: Vehicle): void => {
  vehicle.summary();
};

printVehicle(oldCiviv);
