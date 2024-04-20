const profile = {
  name: "Prabin",
  age: 20,
  coords: {
    lat: 0,
    lon: 80,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age }: { age: number } = profile;

const {
  coords: { lat, lon },
}: { coords: { lat: number; lon: number } } = profile;
console.log("coords :", lat, lon);
