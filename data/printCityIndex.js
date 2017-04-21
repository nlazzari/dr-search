const cities    = require('./cities');
const cityArg   = process.argv[2]; //commandline argument


console.log( cities.getIndex(cityArg) );
