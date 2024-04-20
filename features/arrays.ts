const carMakers: string[] = ["ford", "toyata", "honda"];

const carMakersWithNumber: (string | number)[] = ["ford", "toyata", 4];

const dates = [new Date(), new Date()];

const strArray: string[][] = [];
const carsByMake = [["f150"], 3, [3], "test"];

// carMakers.push(20);

carMakers.map((car: string) => {
  console.log(car);
});
