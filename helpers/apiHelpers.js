function filterByCity(array, city) {
  const filtered = [];

  if(city === '' || city === undefined) {
    return array;
  }

  array.forEach(doctor => {
    if(doctor.contactInfo.length > 0) {
      for(i = 0; i < doctor.contactInfo.length; i++) {
        if(doctor.contactInfo[i].city.toLowerCase() === city.toLowerCase()) {
          filtered.push(doctor);
          break;
        }
      }
    }
  });
  return filtered;
}

function filterByLanguage(array, language) {
  const filtered = [];

  if(language === '' || language === undefined) {
    return array;
  }

  array.forEach(doctor => {
    doctor.languages.split(',').forEach(lang => {
      if(lang.toLowerCase() === language.toLowerCase()) {
        filtered.push(doctor);
      }
    });
  });
  return filtered;
}

function isRated(doctor) {
  return doctor.rateMyMDRating.length > 0 ? true : false;
}

function starRating(doctor) {
  if(isRated(doctor)) {
    return parseFloat(doctor.rateMyMDRating[0].starRating);
  }
  else {
    return parseFloat(0);
  }
}


function sortByStarRating(a, b) {
  //a is less than b by some ordering criterion
  if ( starRating(a) > starRating(b) ) {
    return -1;
  }
  //a is greater than b by the ordering criterion
  if ( starRating(a) < starRating(b) ) {
    return 1;
  }
  // a must be equal to b
  return 0;
}

function pageCount(array, pageSize) {
  if(array.length % pageSize === 0) {
    return array.length / pageSize;
  }
  else {
    return Math.floor(array.length / pageSize) + 1;
  }
}

function filterByPage(array, pageSize, pageNumber) {
  const numPages = pageCount(array, pageSize);
  const startIndex = pageSize*pageNumber;

  return array.slice(startIndex, startIndex + pageSize);
}

function setBlankToUndef(queryString){
  if(queryString === '') {
    return undefined;
  }
  else {
    return queryString;
  }
}

module.exports = {
  filterByCity: filterByCity,
  filterByLanguage: filterByLanguage,
  isRated: isRated,
  starRating: starRating,
  sortByStarRating: sortByStarRating,
  pageCount: pageCount,
  filterByPage: filterByPage,
  setBlankToUndef: setBlankToUndef
};
