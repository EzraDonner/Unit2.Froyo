const city = {
  name: "Seattle",
  neighborhoods: ["Capital Hill", "Freemont", "Ballard", "Queen Anne"],
  established: 1853,
};

// console.log(
//   `I live in ${city.name} and it was established in ${city.established}`
// );

// city.weather = "rainy";

// console.log(city);
// console.log(city.weather);

// console.log(
//   `My least favorite neighborhood in ${city.name} is ${city.neighborhoods[0]}`
// );

// delete city.weather;
// console.log(city);

for (const key in city) {
  console.log(`The key is ${key}`);
  console.log(`The value is ${city[key]}`);
}

console.log(Object.keys(city));
console.log(Object.values(city));

const animalSounds = {
  dog: "bark",
  cat: "meow",
  cow: "moo",
  giraffe: "airplane",
};

console.log(animalSounds.giraffe);

const getAnimalSound = (sound) => {
  if (sound in animalSounds) {
    return animalSounds[sound];
  } else {
    return "This sound has not been found";
  }
};

console.log(getAnimalSound("giraffe"));
