const Express   = require('express');
const router    = Express.Router();
const Doctor    = require('../models/Doctor');
const helper    = require('../helpers/apiHelpers');

const PAGE_SIZE = 10;
const DEFAULT_CITY = '';

// Doctors#index
router.get('/doctors', function(req, res) {
  const pageNumber = req.query.page || 0;
  const city = req.query.city || DEFAULT_CITY;
  const gender = helper.setBlankToUndef(req.query.gender);
  const language = helper.setBlankToUndef(req.query.language);

  const doctors = Doctor
    .query()
    .eager('[contactInfo, rateMyMDRating]')
    .skipUndefined()
    .where('gender', gender)
    .orderBy('lastName')
    .then(docs => {
      let docByCity = helper.filterByCity(docs, city);
          docByCity = helper.filterByLanguage(docByCity, language);
          docByCity.sort(helper.sortByStarRating);
          docByCityPaginated = helper
                      .filterByPage(docByCity, PAGE_SIZE, pageNumber);


      const response = {doctors: docByCityPaginated,
                        city: city,
                        page:pageNumber,
                        pageCount: helper.pageCount(docByCity, PAGE_SIZE),
                        resultsCount: docByCity.length
                      };

      res.send(response);
      console.log('language:', language);
      console.log('gender:', gender);

    })
    .catch(err => {
      console.log('Error:', err);
    });

});
//http://localhost:4545/api/doctors?city=&gender=&language=&page=0

// Doctors#show
router.get('/doctors/:doctorId', function(req, res) {
  const {doctorId} = req.params;

  const doctors = Doctor
    .query()
    .findById(doctorId)
    .eager('[contactInfo, rateMyMDRating]')
    .then(doctor => {
      res.send({doctor: doctor});
    })
    .catch(err => {
      console.log('Error:', err);
    });
});
//http://localhost:4545/api/doctors/390/


// when this file is required, it will receive the object
// assigned to module.exports
module.exports = router;




















/////////////////
