const file            = require('fs-promise');
const doctorDataFile  = 'doctorData.dat';
const doctorDataJs    = 'doctorData.js';

function fileWrite(fileName, data) {
  return file.writeFile(__dirname + '/../data/' + fileName, data);
}

// Delete the contents of both datafiles specified
fileWrite(doctorDataFile, '')
  .then( err => {
    if (err) throw err;

    console.log(`${doctorDataFile} has been initialized.`);
    return fileWrite(doctorDataJs, '');
  })
  .then( err => {
    if (err) throw err;

    console.log(`${doctorDataJs} has been initialized.`);
    process.exit();
  })
  .catch(err => {
    console.log(err);
    process.exit();
  });
