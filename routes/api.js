const Express   = require('express');
const router    = Express.Router();
const Doctor    = require('../models/Doctor');
const helper    = require('../helpers/apiHelpers');

const PAGE_SIZE = 10;
const DEFAULT_CITY = '';

// Doctors#index
router.get('/doctors', function(req, res) {
  const pageNumber = req.query.page || 0;
  const city = helper.setBlankToUndef(req.query.city);
  const gender = helper.setBlankToUndef(req.query.gender);
  const language = helper.setBlankToUndef(req.query.language);

  const doctors = Doctor
    .query()
    .skipUndefined()
    .eagerAlgorithm(Doctor.JoinEagerAlgorithm)
    .eager('[contactInfo, rateMyMDRating]')
    .modifyEager('contactInfo', builder => {
      if(city !== '' || city !== undefined) {
        builder.where('city', city);
      }
    })
    .whereNotNull('contactInfo.city')
    .where('gender', gender)
    .orderBy('lastName')
    // .page(pageNumber, PAGE_SIZE)
    .then(docByCity => {
      // let docByCity = helper.filterByCity(docs, city);
          docByCity = helper.filterByLanguage(docByCity, language);
          docByCity.sort(helper.sortByStarRating);
          docByCityPaginated = helper
                      .filterByPage(docByCity, PAGE_SIZE, pageNumber);


      const response = {
                        doctors: docByCity,
                        city: city,
                        page:pageNumber,
                        pageCount: helper.pageCount(docByCity, PAGE_SIZE),
                        resultsCount: docByCity.length
                      };

      res.json(response);

      console.log('city:', city);
      console.log('language:', language);
      console.log('gender:', gender);
      console.log('\n\nresponse');
      console.dir(response, { depth: null });
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
      res.json({doctor: doctor});
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
