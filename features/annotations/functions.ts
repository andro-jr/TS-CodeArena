const add = (a: number, b: number): number => {
  return a + b;
};

const divide = function divide(a: number, b: number): number {
  return a / b;
};

// console.log(divide(20, 2));

const logger = (message: string): void => {
  console.log(message);
  //   return undefined
  //   return null
};

const throwError = (message: string): never => {
  throw new Error(message);
};

const forecast = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(forecast);
