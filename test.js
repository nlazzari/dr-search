
const URL_BASE   = 'https://www.cpsbc.ca';
const URL_PATH   = '/physician_search';
const URL_SEARCH = `${URL_BASE}${URL_PATH}`;

// jQuery/CSS selector strings.
// '_REL' strings are relative to the base string 'SELECTOR_RESULT_ROW'
// ie. 'td > a' means relative to the
//              full string `${SELECTOR_RESULT_ROW} td > a`
const SELECTOR_RESULT_ROW     = '#college-physio-search tbody tr';
const SELECTOR_PAGE_LIST      = 'ul.pager.inline.item-list li';
const SELECTOR_REL_FULL_NAME  = 'td > a';
const SELECTOR_REL_ADDRESS    = 'div.physio-address-data';
const SELECTOR_REL_PHONE      = 'ul.address-list li';
const SELECTOR_REL_GENDER     = 'td:nth-child(3)';
const SELECTOR_REL_LANGUAGE   = 'td:nth-child(5)';

// Returns an array of all table row elements containing the result data
function getResultRowElements() {
  return $(SELECTOR_RESULT_ROW);
}

// Returns the number of results. Gives an accurate count for cases with
// no results, or null results from lack of a nonce token
function numResultRows() {
  return getResultRowElements().length;
}

// Number of page results (index 0+)
// If there is one result, it is accurate,
// If > 1 the last element is a 'next' link, so ignore it
function numPageResults() {
  const pages = $(SELECTOR_PAGE_LIST).length;

  if(pages === 1) {
    return pages;
  }
  else {
    return pages - 1;
  }
}

function parseNameString(rowElement) {
  const parsedName = $(rowElement).find(SELECTOR_REL_FULL_NAME)[0].innerText;
  const lastName = parsedName.split(', ')[0];
  const firstMiddleName = parsedName.split(', ')[1].split(' »')[0];

  return `${firstMiddleName} ${lastName}`;
}

function parseAddressString(rowElement) {
  return $(rowElement).find(SELECTOR_REL_ADDRESS)[0].innerText;
}

function parsePhoneString(rowElement) {
  return $(rowElement).find(SELECTOR_REL_PHONE)[0]
                      .lastChild.textContent.replace(/\D/g,'');
}

function parseGenderString(rowElement) {
  return $(rowElement).find(SELECTOR_REL_GENDER)[0].innerText;
}

function parseLanguageStrings(rowElement) {
  const languageCell =  $(rowElement).find(SELECTOR_REL_LANGUAGE)[0];
  let languageStrings = [];
  let languageElements;

  if(languageCell.childElementCount > 0) {
    languageElements = $(languageCell).find('li');
    console.log(languageElements);
    for(lang of languageElements) {
      languageStrings.push(lang.textContent);
    }
  }

  return languageStrings;
}
