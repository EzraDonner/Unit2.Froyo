// Prompt the user for a list of integers separated by commas.
const userInput = prompt(
  "Enter a list of froyo flavors separated by commas:",
  "vanilla,vanilla,vanilla,coffee,coffee,strawberry"
);

const flavorArray = userInput.split(",");

const flavorCount = flavorArray.reduce((countObj, flavor) => {
  if (countObj[flavor]) {
    countObj[flavor]++;
  } else {
    countObj[flavor] = 1;
  }
  return countObj;
}, {});

console.log(flavorCount);
