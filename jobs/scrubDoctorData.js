// Takes data found in doctorDataFile, parses to an array, flattens the array,
// removes duplicate entries, and then appends it to doctorDataJs with the
// scrubbed data array set as a javascript constant (and modeule.exports).
//
// doctorDataJs is now ready to be inserted into the database.


const file            = require('fs-promise');
const doctorDataFile  = 'doctorData.txt';
const doctorDataJs    = 'doctorData.js'

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

fileRead(doctorDataFile)
  .then((data) => {
    let    flattened  = [];
    let    js = '';
    const  doctors    = JSON.parse(`[${data}]`);

    doctors.forEach(doctor => {
      flattened = flattened.concat(doctor);
    });

    flattened = uniqueDoctors(flattened);

    console.dir(flattened,  { depth: null });

    js = `const doctors = \n\n` +
          `${JSON.stringify(flattened)}\n\n` +
          `module.exports = doctors;` ;

    return fileAppend(doctorDataJs, js );
  })
  .then( err => {
    if (err) throw err;

    console.log(`\n\nData appended to ${doctorDataJs}`);
    process.exit();
  })
  .catch(err => {
    console.log(err);
    process.exit();
  });












////
