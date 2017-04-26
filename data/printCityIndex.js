const cities    = require('./cities');
const cityArg   = process.argv[2]; //commandline argument
const cityIndex = cities.getIndex(cityArg);

if(cityIndex >= 0) {
  console.log(`\n\n\t${cityArg} has an index of ${cityIndex}.\n\n`);
}
else {
  console.log(`\n\n\tSorry, ${cityArg} is not in the list.\n\n`);
}
