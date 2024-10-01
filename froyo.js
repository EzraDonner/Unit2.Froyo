// Prompt the user for a list of integers separated by commas.
let userInput = prompt(
  "Enter a list of froyo flavors separated by commas:",
  "vanilla,vanilla,vanilla,coffee,coffee,strawberry"
);
let flavorArray = userInput.split(",");
let flavorCount = {};
flavorArray.forEach((flavor) => {
  if (flavorCount[flavor]) {
    flavorCount[flavor]++;
  } else {
    flavorCount[flavor] = 1;
  }
});
console.log(flavorCount);
