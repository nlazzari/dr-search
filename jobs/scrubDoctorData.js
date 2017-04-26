// Takes data found in doctorDataFile, parses to an array, flattens the array,
// removes duplicate entries, and then appends it to doctorDataJs with the
// scrubbed data array set as a javascript constant (and modeule.exports).
//
// doctorDataJs is now ready to be inserted into the database using the script
// saveDoctorData.js .


const file            = require('fs-promise');
const doctorDataFile  = 'doctorData.dat';
const doctorDataJs    = 'doctorData.js'

// takes an array of doctor records, and returns only unique doctor records
function uniqueDoctors(doctors) {
  const namesAdded = [];
  const uniqueDocs = [];

  let nameHash = '';
  doctors.forEach(doc => {
    nameHash = `${doc.firstName}${doc.middleName}${doc.lastName}`;

    if(namesAdded.indexOf(nameHash) === -1) {
      uniqueDocs.push(doc);
      namesAdded.push(nameHash);
    }
  });
  return uniqueDocs;
}

function fileAppend(fileName, data) {
  return file.appendFile(__dirname + '/../data/' + fileName, data);
}

function fileRead(fileName) {
  return file.readFile(__dirname + '/../data/' + fileName, {encoding:'utf8'});
}

function fileWrite(fileName, data) {
  return file.writeFile(__dirname + '/../data/' + fileName, data);
}

/// BEGIN SCRUBBING OPERATIONS
// First erase the contents of doctorDataJs file before reading doctorDataFile,
// and writing its contents into doctorDataJs
fileWrite(doctorDataJs, '')
  .then( err => {
    if (err) throw err;

    console.log(`\n\nScrub Doctor Data Script`);
    console.log(    `------------------------`);
    console.log(`Initialized:\t\t\t${doctorDataJs}`);

    // Read all doctor object records from doctorDataFile, parse them into a JSON
    // array,
    return fileRead(doctorDataFile);
  })
  .then((data) => {
    let    flattened  = [];
    let    js = '';

    // Remove the extra comma and \n at the end of the file,
    // then parse into an array
    const  doctors    = JSON.parse(`[${data.slice(0, data.length-2)}]`);

    // flatten the nested array structure
    doctors.forEach(doctor => {
      flattened = flattened.concat(doctor);
    });

    // remove duplicate doctor records
    flattened = uniqueDoctors(flattened);

    // console.dir(flattened,  { depth: null });

    // make template text that is declaring the scrubbed data
    // as a giant javascript array
    js = `const doctors = \n\n` +
          `${JSON.stringify(flattened)}\n\n` +
          `module.exports = doctors;` ;

    console.log(`Scrubbed data from:\t\t${doctorDataFile}`);

    // add the javascript template text to doctorDataJs to be imported into
    // the database using saveDoctorData.js
    return fileAppend(doctorDataJs, js );
  })
  .then( err => {
    if (err) throw err;

    console.log(`Saved scrubbed data to:\t\t${doctorDataJs}\n\n`);
    process.exit();
  })
  .catch(err => {
    console.log(err);
    process.exit();
  });












////
