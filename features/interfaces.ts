interface Reportable {
  summary(): void;
}

const oldCiviv = {
  model: "RR677",
  year: 2000,
  broken: true,
  summary() {
    console.log("Summary Printed: CIVIC");
  },
};

const juice = {
  color: "yellow",
  carbonated: true,
  price: 40,
  summary() {
    console.log("Summary Printed: JUICE");
  },
};

const printSummary = (item: Reportable): void => {
  item.summary();
};

printSummary(oldCiviv);
printSummary(juice);
