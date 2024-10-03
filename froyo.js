// Prompt the user for a list of integers separated by commas.
let userInput = prompt(
  "Enter a list of froyo flavors separated by commas:",
  "vanilla,vanilla,vanilla,coffee,coffee,strawberry"
);

// Split the input string into an array of flavors
let flavorArray = userInput.split(",");

// Create an object to hold the flavor counts
let flavorCount = flavorArray.reduce((countObj, flavor) => {
  // If the flavor is already a key in the object, increment its count
  if (countObj[flavor]) {
    countObj[flavor]++;
  } else {
    // If it's not already a key, set its count to 1
    countObj[flavor] = 1;
  }
  return countObj;
}, {});

// Log the resulting object to the console
console.log(flavorCount);
