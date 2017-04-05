const PAGE_SIZE = 10;
const docs =
[
  {
    "id": 376,
    "firstName": "Robert",
    "middleName": "Frederick",
    "lastName": "Woollard",
    "gender": "Male",
    "languages": "",
    "createdAt": "2017-04-04T09:45:36.688Z",
    "updatedAt": "2017-04-04T09:45:36.688Z",
    "contactInfo": [
      {
        "id": 195,
        "DoctorId": 376,
        "streetAddress": "David Strangway Building, UBC Department of Family Practice,320-5950 University Blvd",
        "city": "Vancouver",
        "postalCode": "V6T 1Z3",
        "phoneNumber": "6048225431",
        "createdAt": "2017-04-04T09:45:36.763Z",
        "updatedAt": "2017-04-04T09:45:36.763Z"
      }
    ],
    "rateMyMDRating": [
      {
        "id": 122,
        "DoctorId": 376,
        "starRating": 5,
        "profileLink": "https://www.ratemds.com/doctor-ratings/3745605/Dr-Robert-Woollard-Vancouver-BC.html",
        "searchLink": "https://www.ratemds.com/best-doctors/bc/vancouver/family-gp/?text=robert%20woollard",
        "resultsCount": 1,
        "createdAt": "2017-04-04T09:45:36.764Z",
        "updatedAt": "2017-04-04T09:45:36.764Z"
      }
    ]
  },
  {
    "id": 366,
    "firstName": "Mahdad",
    "middleName": "Hejazi",
    "lastName": "Rodd",
    "gender": "Male",
    "languages": "",
    "createdAt": "2017-04-04T09:45:36.688Z",
    "updatedAt": "2017-04-04T09:45:36.688Z",
    "contactInfo": [
      {
        "id": 185,
        "DoctorId": 366,
        "streetAddress": "Seymour Health Centre,1530 7th Ave West",
        "city": "Vancouver",
        "postalCode": "V6J 1S3",
        "phoneNumber": "6047382151",
        "createdAt": "2017-04-04T09:45:36.763Z",
        "updatedAt": "2017-04-04T09:45:36.763Z"
      }
    ],
    "rateMyMDRating": [
      {
        "id": 115,
        "DoctorId": 366,
        "starRating": 5,
        "profileLink": "https://www.ratemds.com/doctor-ratings/dr-mahdad-rodd-vancouver-bc-ca",
        "searchLink": "https://www.ratemds.com/best-doctors/bc/vancouver/family-gp/?text=mahdad%20rodd",
        "resultsCount": 1,
        "createdAt": "2017-04-04T09:45:36.764Z",
        "updatedAt": "2017-04-04T09:45:36.764Z"
      }
    ]
  },
  {
    "id": 347,
    "firstName": "Lauren",
    "middleName": "Bree",
    "lastName": "Fineman",
    "gender": "Female",
    "languages": "",
    "createdAt": "2017-04-04T09:45:36.688Z",
    "updatedAt": "2017-04-04T09:45:36.688Z",
    "contactInfo": [
      {
        "id": 166,
        "DoctorId": 347,
        "streetAddress": "401-555 8th Ave W",
        "city": "Vancouver",
        "postalCode": "V5Z 1C6",
        "phoneNumber": "6046282822",
        "createdAt": "2017-04-04T09:45:36.763Z",
        "updatedAt": "2017-04-04T09:45:36.763Z"
      }
    ],
    "rateMyMDRating": [
      {
        "id": 101,
        "DoctorId": 347,
        "starRating": 4.56,
        "profileLink": "https://www.ratemds.com/doctor-ratings/3351094/Dr-Lauren-Fineman-Vancouver-BC.html",
        "searchLink": "https://www.ratemds.com/best-doctors/bc/vancouver/family-gp/?text=lauren%20fineman",
        "resultsCount": 5,
        "createdAt": "2017-04-04T09:45:36.763Z",
        "updatedAt": "2017-04-04T09:45:36.763Z"
      }
    ]
  },
  {
    "id": 349,
    "firstName": "Colin",
    "middleName": "Henry",
    "lastName": "Horricks",
    "gender": "Male",
    "languages": "",
    "createdAt": "2017-04-04T09:45:36.688Z",
    "updatedAt": "2017-04-04T09:45:36.688Z",
    "contactInfo": [
      {
        "id": 168,
        "DoctorId": 349,
        "streetAddress": "205-3195 Granville St",
        "city": "Vancouver",
        "postalCode": "V6H 3K2",
        "phoneNumber": "6047316212",
        "createdAt": "2017-04-04T09:45:36.763Z",
        "updatedAt": "2017-04-04T09:45:36.763Z"
      }
    ],
    "rateMyMDRating": [
      {
        "id": 103,
        "DoctorId": 349,
        "starRating": 4.27,
        "profileLink": "https://www.ratemds.com/doctor-ratings/40079/Dr-Collin-Horricks-Vancouver-BC.html",
        "searchLink": "https://www.ratemds.com/best-doctors/bc/vancouver/family-gp/?text=colin%20horricks",
        "resultsCount": 1,
        "createdAt": "2017-04-04T09:45:36.763Z",
        "updatedAt": "2017-04-04T09:45:36.763Z"
      }
    ]
  },
  {
    "id": 372,
    "firstName": "Harshbir",
    "middleName": "Singh",
    "lastName": "Toor",
    "gender": "Male",
    "languages": "Hindi,Punjabi,Urdu",
    "createdAt": "2017-04-04T09:45:36.688Z",
    "updatedAt": "2017-04-04T09:45:36.688Z",
    "contactInfo": [
      {
        "id": 191,
        "DoctorId": 372,
        "streetAddress": "6408 Main Street",
        "city": "Vancouver",
        "postalCode": "V5W2V4",
        "phoneNumber": "6045685667",
        "createdAt": "2017-04-04T09:45:36.763Z",
        "updatedAt": "2017-04-04T09:45:36.763Z"
      }
    ],
    "rateMyMDRating": [
      {
        "id": 120,
        "DoctorId": 372,
        "starRating": 4.23,
        "profileLink": "https://www.ratemds.com/doctor-ratings/dr-harshbir-s-toor-vancouver-bc-ca",
        "searchLink": "https://www.ratemds.com/best-doctors/bc/vancouver/family-gp/?text=harshbir%20toor",
        "resultsCount": 1,
        "createdAt": "2017-04-04T09:45:36.764Z",
        "updatedAt": "2017-04-04T09:45:36.764Z"
      }
    ]
  },
  {
    "id": 352,
    "firstName": "Leszek",
    "middleName": "",
    "lastName": "Kalinowski",
    "gender": "Male",
    "languages": "Polish,Russian",
    "createdAt": "2017-04-04T09:45:36.688Z",
    "updatedAt": "2017-04-04T09:45:36.688Z",
    "contactInfo": [
      {
        "id": 171,
        "DoctorId": 352,
        "streetAddress": "305-1160 Burrard St",
        "city": "Vancouver",
        "postalCode": "V6Z 2E8",
        "phoneNumber": "6046818735",
        "createdAt": "2017-04-04T09:45:36.763Z",
        "updatedAt": "2017-04-04T09:45:36.763Z"
      }
    ],
    "rateMyMDRating": [
      {
        "id": 105,
        "DoctorId": 352,
        "starRating": 3.98,
        "profileLink": "https://www.ratemds.com/doctor-ratings/50244/Dr-Leszek-Kalinowski-Vancouver-BC.html",
        "searchLink": "https://www.ratemds.com/best-doctors/bc/vancouver/family-gp/?text=leszek%20kalinowski",
        "resultsCount": 1,
        "createdAt": "2017-04-04T09:45:36.763Z",
        "updatedAt": "2017-04-04T09:45:36.763Z"
      }
    ]
  },
  {
    "id": 343,
    "firstName": "Nathan",
    "middleName": "",
    "lastName": "Batt",
    "gender": "Male",
    "languages": "",
    "createdAt": "2017-04-04T09:45:36.688Z",
    "updatedAt": "2017-04-04T09:45:36.688Z",
    "contactInfo": [
      {
        "id": 161,
        "DoctorId": 343,
        "streetAddress": "2032 Kingsway",
        "city": "Vancouver",
        "postalCode": "V5N 2T3",
        "phoneNumber": "6048745555",
        "createdAt": "2017-04-04T09:45:36.762Z",
        "updatedAt": "2017-04-04T09:45:36.762Z"
      }
    ],
    "rateMyMDRating": [
      {
        "id": 99,
        "DoctorId": 343,
        "starRating": 3.89,
        "profileLink": "https://www.ratemds.com/doctor-ratings/105883/Dr-Nathan-Batt-Vancouver-BC.html",
        "searchLink": "https://www.ratemds.com/best-doctors/bc/vancouver/family-gp/?text=nathan%20batt",
        "resultsCount": 2,
        "createdAt": "2017-04-04T09:45:36.763Z",
        "updatedAt": "2017-04-04T09:45:36.763Z"
      }
    ]
  },
  {
    "id": 363,
    "firstName": "Brandt",
    "middleName": "Darryl",
    "lastName": "Miles",
    "gender": "Male",
    "languages": "",
    "createdAt": "2017-04-04T09:45:36.688Z",
    "updatedAt": "2017-04-04T09:45:36.688Z",
    "contactInfo": [
      {
        "id": 182,
        "DoctorId": 363,
        "streetAddress": "240-1144 Burrard St",
        "city": "Vancouver",
        "postalCode": "V6Z 2A5",
        "phoneNumber": "6046897105",
        "createdAt": "2017-04-04T09:45:36.763Z",
        "updatedAt": "2017-04-04T09:45:36.763Z"
      }
    ],
    "rateMyMDRating": [
      {
        "id": 112,
        "DoctorId": 363,
        "starRating": 3.73,
        "profileLink": "https://www.ratemds.com/doctor-ratings/62145/Dr-Brandt-Miles-Vancouver-BC.html",
        "searchLink": "https://www.ratemds.com/best-doctors/bc/vancouver/family-gp/?text=brandt%20miles",
        "resultsCount": 2,
        "createdAt": "2017-04-04T09:45:36.763Z",
        "updatedAt": "2017-04-04T09:45:36.763Z"
      }
    ]
  },
  {
    "id": 371,
    "firstName": "Stanley",
    "middleName": "Leonard",
    "lastName": "Sunshine",
    "gender": "Male",
    "languages": "",
    "createdAt": "2017-04-04T09:45:36.688Z",
    "updatedAt": "2017-04-04T09:45:36.688Z",
    "contactInfo": [
      {
        "id": 190,
        "DoctorId": 371,
        "streetAddress": "1101-805 Broadway  W",
        "city": "Vancouver",
        "postalCode": "V5Z 1K1",
        "phoneNumber": "6048795271",
        "createdAt": "2017-04-04T09:45:36.763Z",
        "updatedAt": "2017-04-04T09:45:36.763Z"
      }
    ],
    "rateMyMDRating": [
      {
        "id": 119,
        "DoctorId": 371,
        "starRating": 3.58,
        "profileLink": "https://www.ratemds.com/doctor-ratings/74031/Dr-Stanley-Sunshine-Vancouver-BC.html",
        "searchLink": "https://www.ratemds.com/best-doctors/bc/vancouver/family-gp/?text=stanley%20sunshine",
        "resultsCount": 1,
        "createdAt": "2017-04-04T09:45:36.764Z",
        "updatedAt": "2017-04-04T09:45:36.764Z"
      }
    ]
  },
  {
    "id": 361,
    "firstName": "Jamuna",
    "middleName": "Lal",
    "lastName": "Makhija",
    "gender": "Male",
    "languages": "Hindi,Punjabi",
    "createdAt": "2017-04-04T09:45:36.688Z",
    "updatedAt": "2017-04-04T09:45:36.688Z",
    "contactInfo": [
      {
        "id": 180,
        "DoctorId": 361,
        "streetAddress": "4971 Victoria Dr",
        "city": "Vancouver",
        "postalCode": "V5P 3T7",
        "phoneNumber": "6043229224",
        "createdAt": "2017-04-04T09:45:36.763Z",
        "updatedAt": "2017-04-04T09:45:36.763Z"
      }
    ],
    "rateMyMDRating": [
      {
        "id": 110,
        "DoctorId": 361,
        "starRating": 3.44,
        "profileLink": "https://www.ratemds.com/doctor-ratings/3869302/Dr-Jamuna+L-Makhija-Vancouver-BC.html",
        "searchLink": "https://www.ratemds.com/best-doctors/bc/vancouver/family-gp/?text=jamuna%20makhija",
        "resultsCount": 2,
        "createdAt": "2017-04-04T09:45:36.763Z",
        "updatedAt": "2017-04-04T09:45:36.763Z"
      }
    ]
  },
  {
    "id": 348,
    "firstName": "Ronald",
    "middleName": "Boruch",
    "lastName": "Greenberg",
    "gender": "Male",
    "languages": "",
    "createdAt": "2017-04-04T09:45:36.688Z",
    "updatedAt": "2017-04-04T09:45:36.688Z",
    "contactInfo": [
      {
        "id": 167,
        "DoctorId": 348,
        "streetAddress": "212-2678 Broadway  W",
        "city": "Vancouver",
        "postalCode": "V6K 2G3",
        "phoneNumber": "6047331055",
        "createdAt": "2017-04-04T09:45:36.763Z",
        "updatedAt": "2017-04-04T09:45:36.763Z"
      }
    ],
    "rateMyMDRating": [
      {
        "id": 102,
        "DoctorId": 348,
        "starRating": 3.42,
        "profileLink": "https://www.ratemds.com/doctor-ratings/40443/Dr-Ronald-Greenberg-Vancouver-BC.html",
        "searchLink": "https://www.ratemds.com/best-doctors/bc/vancouver/family-gp/?text=ronald%20greenberg",
        "resultsCount": 2,
        "createdAt": "2017-04-04T09:45:36.763Z",
        "updatedAt": "2017-04-04T09:45:36.763Z"
      }
    ]
  },
  {
    "id": 368,
    "firstName": "Tarun",
    "middleName": "Krishna",
    "lastName": "Shaha",
    "gender": "Male",
    "languages": "Bengali",
    "createdAt": "2017-04-04T09:45:36.688Z",
    "updatedAt": "2017-04-04T09:45:36.688Z",
    "contactInfo": [
      {
        "id": 187,
        "DoctorId": 368,
        "streetAddress": "201-1160 Burrard St",
        "city": "Vancouver",
        "postalCode": "V6Z 2E8",
        "phoneNumber": "6045584044",
        "createdAt": "2017-04-04T09:45:36.763Z",
        "updatedAt": "2017-04-04T09:45:36.763Z"
      }
    ],
    "rateMyMDRating": [
      {
        "id": 117,
        "DoctorId": 368,
        "starRating": 3.05,
        "profileLink": "https://www.ratemds.com/doctor-ratings/3569359/Dr-Tarun-Shaha-Vancouver-BC.html",
        "searchLink": "https://www.ratemds.com/best-doctors/bc/vancouver/family-gp/?text=tarun%20shaha",
        "resultsCount": 1,
        "createdAt": "2017-04-04T09:45:36.764Z",
        "updatedAt": "2017-04-04T09:45:36.764Z"
      }
    ]
  },
  {
    "id": 354,
    "firstName": "Atila",
    "middleName": "Hamdi",
    "lastName": "Ketene",
    "gender": "Male",
    "languages": "Turkish",
    "createdAt": "2017-04-04T09:45:36.688Z",
    "updatedAt": "2017-04-04T09:45:36.688Z",
    "contactInfo": [
      {
        "id": 173,
        "DoctorId": 354,
        "streetAddress": "206-2678 Broadway  W",
        "city": "Vancouver",
        "postalCode": "V6K 2G3",
        "phoneNumber": "6047372699",
        "createdAt": "2017-04-04T09:45:36.763Z",
        "updatedAt": "2017-04-04T09:45:36.763Z"
      }
    ],
    "rateMyMDRating": [
      {
        "id": 106,
        "DoctorId": 354,
        "starRating": 3.04,
        "profileLink": "https://www.ratemds.com/doctor-ratings/107680/Dr-Atila-Ketene-Vancouver-BC.html",
        "searchLink": "https://www.ratemds.com/best-doctors/bc/vancouver/family-gp/?text=atila%20ketene",
        "resultsCount": 1,
        "createdAt": "2017-04-04T09:45:36.763Z",
        "updatedAt": "2017-04-04T09:45:36.763Z"
      }
    ]
  },
  {
    "id": 359,
    "firstName": "Michael",
    "middleName": "Che-Chiang",
    "lastName": "Lee",
    "gender": "Male",
    "languages": "",
    "createdAt": "2017-04-04T09:45:36.688Z",
    "updatedAt": "2017-04-04T09:45:36.688Z",
    "contactInfo": [
      {
        "id": 178,
        "DoctorId": 359,
        "streetAddress": "306-1160 Burrard St",
        "city": "Vancouver",
        "postalCode": "V6Z 2E8",
        "phoneNumber": "6046857747",
        "createdAt": "2017-04-04T09:45:36.763Z",
        "updatedAt": "2017-04-04T09:45:36.763Z"
      }
    ],
    "rateMyMDRating": [
      {
        "id": 109,
        "DoctorId": 359,
        "starRating": 2.92,
        "profileLink": "https://www.ratemds.com/doctor-ratings/893658/Dr-Michael+C.+C.-Lee-Surrey-BC.html",
        "searchLink": "https://www.ratemds.com/best-doctors/bc/vancouver/family-gp/?text=michael%20lee",
        "resultsCount": 2,
        "createdAt": "2017-04-04T09:45:36.763Z",
        "updatedAt": "2017-04-04T09:45:36.763Z"
      }
    ]
  },
  {
    "id": 357,
    "firstName": "Joseph",
    "middleName": "Ka Ping",
    "lastName": "Lam",
    "gender": "Male",
    "languages": "Cantonese,Mandarin",
    "createdAt": "2017-04-04T09:45:36.688Z",
    "updatedAt": "2017-04-04T09:45:36.688Z",
    "contactInfo": [
      {
        "id": 176,
        "DoctorId": 357,
        "streetAddress": "235 Marine Dr SE",
        "city": "Vancouver",
        "postalCode": "V5X 2S4",
        "phoneNumber": "6043223011",
        "createdAt": "2017-04-04T09:45:36.763Z",
        "updatedAt": "2017-04-04T09:45:36.763Z"
      }
    ],
    "rateMyMDRating": [
      {
        "id": 108,
        "DoctorId": 357,
        "starRating": 2.92,
        "profileLink": "https://www.ratemds.com/doctor-ratings/3645594/Dr-Joseph+K.-Lam-Vancouver-BC.html",
        "searchLink": "https://www.ratemds.com/best-doctors/bc/vancouver/family-gp/?text=joseph%20lam",
        "resultsCount": 3,
        "createdAt": "2017-04-04T09:45:36.763Z",
        "updatedAt": "2017-04-04T09:45:36.763Z"
      }
    ]
  },
  {
    "id": 375,
    "firstName": "Charles",
    "middleName": "Dewar",
    "lastName": "Webb",
    "gender": "Male",
    "languages": "Afrikaans",
    "createdAt": "2017-04-04T09:45:36.688Z",
    "updatedAt": "2017-04-04T09:45:36.688Z",
    "contactInfo": [
      {
        "id": 194,
        "DoctorId": 375,
        "streetAddress": "102-8584 Granville St",
        "city": "Vancouver",
        "postalCode": "V6P 4Z7",
        "phoneNumber": "6042661496",
        "createdAt": "2017-04-04T09:45:36.763Z",
        "updatedAt": "2017-04-04T09:45:36.763Z"
      }
    ],
    "rateMyMDRating": [
      {
        "id": 121,
        "DoctorId": 375,
        "starRating": 2.83,
        "profileLink": "https://www.ratemds.com/doctor-ratings/63847/Dr-Charles-Webb-Vancouver-BC.html",
        "searchLink": "https://www.ratemds.com/best-doctors/bc/vancouver/family-gp/?text=charles%20webb",
        "resultsCount": 1,
        "createdAt": "2017-04-04T09:45:36.764Z",
        "updatedAt": "2017-04-04T09:45:36.764Z"
      }
    ]
  },
  {
    "id": 365,
    "firstName": "Ashnoor",
    "middleName": "",
    "lastName": "Nagji",
    "gender": "Female",
    "languages": "Gujarati,Hindi,Kutchi,Urdu",
    "createdAt": "2017-04-04T09:45:36.688Z",
    "updatedAt": "2017-04-04T09:45:36.688Z",
    "contactInfo": [
      {
        "id": 184,
        "DoctorId": 365,
        "streetAddress": "Pacific Medical Clinic,3185 Grandview Hwy",
        "city": "Vancouver",
        "postalCode": "V5M 2E9",
        "phoneNumber": "6044342222",
        "createdAt": "2017-04-04T09:45:36.763Z",
        "updatedAt": "2017-04-04T09:45:36.763Z"
      }
    ],
    "rateMyMDRating": [
      {
        "id": 114,
        "DoctorId": 365,
        "starRating": 2.75,
        "profileLink": "https://www.ratemds.com/doctor-ratings/3351686/Dr-Ashnoor-Nagji-Vancouver-BC.html",
        "searchLink": "https://www.ratemds.com/best-doctors/bc/vancouver/family-gp/?text=ashnoor%20nagji",
        "resultsCount": 1,
        "createdAt": "2017-04-04T09:45:36.764Z",
        "updatedAt": "2017-04-04T09:45:36.764Z"
      }
    ]
  },
  {
    "id": 362,
    "firstName": "Peter",
    "middleName": "John",
    "lastName": "Marr",
    "gender": "Male",
    "languages": "",
    "createdAt": "2017-04-04T09:45:36.688Z",
    "updatedAt": "2017-04-04T09:45:36.688Z",
    "contactInfo": [
      {
        "id": 181,
        "DoctorId": 362,
        "streetAddress": "200-1525 Robson St",
        "city": "Vancouver",
        "postalCode": "V6G 1C3",
        "phoneNumber": "6046695669",
        "createdAt": "2017-04-04T09:45:36.763Z",
        "updatedAt": "2017-04-04T09:45:36.763Z"
      }
    ],
    "rateMyMDRating": [
      {
        "id": 111,
        "DoctorId": 362,
        "starRating": 2.72,
        "profileLink": "https://www.ratemds.com/doctor-ratings/40125/Dr-Peter-Marr-Vancouver-BC.html",
        "searchLink": "https://www.ratemds.com/best-doctors/bc/vancouver/family-gp/?text=peter%20marr",
        "resultsCount": 1,
        "createdAt": "2017-04-04T09:45:36.763Z",
        "updatedAt": "2017-04-04T09:45:36.763Z"
      }
    ]
  },
  {
    "id": 364,
    "firstName": "Brian",
    "middleName": "F.",
    "lastName": "Montgomery",
    "gender": "Male",
    "languages": "",
    "createdAt": "2017-04-04T09:45:36.688Z",
    "updatedAt": "2017-04-04T09:45:36.688Z",
    "contactInfo": [
      {
        "id": 183,
        "DoctorId": 364,
        "streetAddress": "Mainland Medical Clinic,1061 Hamilton St",
        "city": "Vancouver",
        "postalCode": "V6B 5T4",
        "phoneNumber": "6046833973",
        "createdAt": "2017-04-04T09:45:36.763Z",
        "updatedAt": "2017-04-04T09:45:36.763Z"
      }
    ],
    "rateMyMDRating": [
      {
        "id": 113,
        "DoctorId": 364,
        "starRating": 2.7,
        "profileLink": "https://www.ratemds.com/doctor-ratings/40051/Dr-Brian-Montgomery-Vancouver-BC.html",
        "searchLink": "https://www.ratemds.com/best-doctors/bc/vancouver/family-gp/?text=brian%20montgomery",
        "resultsCount": 1,
        "createdAt": "2017-04-04T09:45:36.763Z",
        "updatedAt": "2017-04-04T09:45:36.763Z"
      }
    ]
  },
  {
    "id": 355,
    "firstName": "Peter",
    "middleName": "Tak Mo",
    "lastName": "Ko",
    "gender": "Male",
    "languages": "",
    "createdAt": "2017-04-04T09:45:36.688Z",
    "updatedAt": "2017-04-04T09:45:36.688Z",
    "contactInfo": [
      {
        "id": 174,
        "DoctorId": 355,
        "streetAddress": "Champlain Square,3188 54 Ave E",
        "city": "Vancouver",
        "postalCode": "V5S 1Z1",
        "phoneNumber": "6044346677",
        "createdAt": "2017-04-04T09:45:36.763Z",
        "updatedAt": "2017-04-04T09:45:36.763Z"
      }
    ],
    "rateMyMDRating": [
      {
        "id": 107,
        "DoctorId": 355,
        "starRating": 2.45,
        "profileLink": "https://www.ratemds.com/doctor-ratings/40174/Dr-Peter-Ko-Vancouver-BC.html",
        "searchLink": "https://www.ratemds.com/best-doctors/bc/vancouver/family-gp/?text=peter%20ko",
        "resultsCount": 1,
        "createdAt": "2017-04-04T09:45:36.763Z",
        "updatedAt": "2017-04-04T09:45:36.763Z"
      }
    ]
  },
  {
    "id": 346,
    "firstName": "Florina",
    "middleName": "Tianyi",
    "lastName": "Feng",
    "gender": "Female",
    "languages": "Mandarin",
    "createdAt": "2017-04-04T09:45:36.688Z",
    "updatedAt": "2017-04-04T09:45:36.688Z",
    "contactInfo": [
      {
        "id": 164,
        "DoctorId": 346,
        "streetAddress": "307-550 West Broadway",
        "city": "Vancouver",
        "postalCode": "V5Z 0E9",
        "phoneNumber": "6045688377",
        "createdAt": "2017-04-04T09:45:36.763Z",
        "updatedAt": "2017-04-04T09:45:36.763Z"
      },
      {
        "id": 165,
        "DoctorId": 346,
        "streetAddress": "120-8120 Cook Rd",
        "city": "Richmond",
        "postalCode": "V6Y 1T9",
        "phoneNumber": "6042785191",
        "createdAt": "2017-04-04T09:45:36.763Z",
        "updatedAt": "2017-04-04T09:45:36.763Z"
      }
    ],
    "rateMyMDRating": [
      {
        "id": 100,
        "DoctorId": 346,
        "starRating": 1.97,
        "profileLink": "https://www.ratemds.com/doctor-ratings/dr-florina-feng-vancouver-bc-ca",
        "searchLink": "https://www.ratemds.com/best-doctors/bc/vancouver/family-gp/?text=florina%20feng",
        "resultsCount": 1,
        "createdAt": "2017-04-04T09:45:36.763Z",
        "updatedAt": "2017-04-04T09:45:36.763Z"
      }
    ]
  },
  {
    "id": 350,
    "firstName": "Frank",
    "middleName": "Liang",
    "lastName": "Hou",
    "gender": "Male",
    "languages": "",
    "createdAt": "2017-04-04T09:45:36.688Z",
    "updatedAt": "2017-04-04T09:45:36.688Z",
    "contactInfo": [
      {
        "id": 169,
        "DoctorId": 350,
        "streetAddress": "215-888 8 Ave W",
        "city": "Vancouver",
        "postalCode": "V5Z 3Y1",
        "phoneNumber": "6048720345",
        "createdAt": "2017-04-04T09:45:36.763Z",
        "updatedAt": "2017-04-04T09:45:36.763Z"
      }
    ],
    "rateMyMDRating": [
      {
        "id": 104,
        "DoctorId": 350,
        "starRating": 1.87,
        "profileLink": "https://www.ratemds.com/doctor-ratings/38235/Dr-Frank-Hou-Vancouver-BC.html",
        "searchLink": "https://www.ratemds.com/best-doctors/bc/vancouver/family-gp/?text=frank%20hou",
        "resultsCount": 5,
        "createdAt": "2017-04-04T09:45:36.763Z",
        "updatedAt": "2017-04-04T09:45:36.763Z"
      }
    ]
  },
  {
    "id": 369,
    "firstName": "Patrick",
    "middleName": "Kin-Ying",
    "lastName": "Shiu",
    "gender": "Male",
    "languages": "Cantonese,Mandarin",
    "createdAt": "2017-04-04T09:45:36.688Z",
    "updatedAt": "2017-04-04T09:45:36.688Z",
    "contactInfo": [
      {
        "id": 188,
        "DoctorId": 369,
        "streetAddress": "Kerrisdale Station Medical Clinic,2077 42nd Ave W",
        "city": "Vancouver",
        "postalCode": "V6M 2B4",
        "phoneNumber": "6042619494",
        "createdAt": "2017-04-04T09:45:36.763Z",
        "updatedAt": "2017-04-04T09:45:36.763Z"
      }
    ],
    "rateMyMDRating": [
      {
        "id": 118,
        "DoctorId": 369,
        "starRating": 1.69,
        "profileLink": "https://www.ratemds.com/doctor-ratings/3516050/Dr-Patrick-Shiu-Vancouver-BC.html",
        "searchLink": "https://www.ratemds.com/best-doctors/bc/vancouver/family-gp/?text=patrick%20shiu",
        "resultsCount": 1,
        "createdAt": "2017-04-04T09:45:36.764Z",
        "updatedAt": "2017-04-04T09:45:36.764Z"
      }
    ]
  },
  {
    "id": 358,
    "firstName": "Marco",
    "middleName": "Cheuk-Lam",
    "lastName": "Lau",
    "gender": "Male",
    "languages": "Cantonese,Mandarin",
    "createdAt": "2017-04-04T09:45:36.688Z",
    "updatedAt": "2017-04-04T09:45:36.688Z",
    "contactInfo": [
      {
        "id": 177,
        "DoctorId": 358,
        "streetAddress": "Forward Care Medical Clinic,2736 41st Ave E",
        "city": "Vancouver",
        "postalCode": "V5R 2X1",
        "phoneNumber": "6044303699",
        "createdAt": "2017-04-04T09:45:36.763Z",
        "updatedAt": "2017-04-04T09:45:36.763Z"
      }
    ],
    "rateMyMDRating": []
  },
  {
    "id": 373,
    "firstName": "Gabriel",
    "middleName": "Jacobus van den",
    "lastName": "Berg",
    "gender": "Male",
    "languages": "Afrikaans",
    "createdAt": "2017-04-04T09:45:36.688Z",
    "updatedAt": "2017-04-04T09:45:36.688Z",
    "contactInfo": [
      {
        "id": 192,
        "DoctorId": 373,
        "streetAddress": "3185 Grandview Hwy,Pacific Medical Clinic",
        "city": "Vancouver",
        "postalCode": "V5M 2E9",
        "phoneNumber": "6044342222",
        "createdAt": "2017-04-04T09:45:36.763Z",
        "updatedAt": "2017-04-04T09:45:36.763Z"
      }
    ],
    "rateMyMDRating": []
  },
  {
    "id": 360,
    "firstName": "Bin-Keng",
    "middleName": "",
    "lastName": "Lim",
    "gender": "Male",
    "languages": "",
    "createdAt": "2017-04-04T09:45:36.688Z",
    "updatedAt": "2017-04-04T09:45:36.688Z",
    "contactInfo": [
      {
        "id": 179,
        "DoctorId": 360,
        "streetAddress": "306-1160 Burrard St",
        "city": "Vancouver",
        "postalCode": "V6Z 2E8",
        "phoneNumber": "6046857747",
        "createdAt": "2017-04-04T09:45:36.763Z",
        "updatedAt": "2017-04-04T09:45:36.763Z"
      }
    ],
    "rateMyMDRating": []
  },
  {
    "id": 367,
    "firstName": "Sherwyn",
    "middleName": "Lydon Emil",
    "lastName": "Roman",
    "gender": "Male",
    "languages": "",
    "createdAt": "2017-04-04T09:45:36.688Z",
    "updatedAt": "2017-04-04T09:45:36.688Z",
    "contactInfo": [
      {
        "id": 186,
        "DoctorId": 367,
        "streetAddress": "Pacific Medical Clinic,2032 Kingsway",
        "city": "Vancouver",
        "postalCode": "V5N 2T3",
        "phoneNumber": "6048745555",
        "createdAt": "2017-04-04T09:45:36.763Z",
        "updatedAt": "2017-04-04T09:45:36.763Z"
      }
    ],
    "rateMyMDRating": [
      {
        "id": 116,
        "DoctorId": 367,
        "starRating": 0,
        "profileLink": "https://www.ratemds.com/doctor-ratings/dr-sherwyn-lydon-emil-roman-vancouver-bc-ca",
        "searchLink": "https://www.ratemds.com/best-doctors/bc/vancouver/family-gp/?text=sherwyn%20roman",
        "resultsCount": 1,
        "createdAt": "2017-04-04T09:45:36.764Z",
        "updatedAt": "2017-04-04T09:45:36.764Z"
      }
    ]
  },
  {
    "id": 353,
    "firstName": "Ramesh",
    "middleName": "Krishna",
    "lastName": "Kamath",
    "gender": "Male",
    "languages": "Hindi",
    "createdAt": "2017-04-04T09:45:36.688Z",
    "updatedAt": "2017-04-04T09:45:36.688Z",
    "contactInfo": [
      {
        "id": 172,
        "DoctorId": 353,
        "streetAddress": "Simply Wellness Medical,1818 Kingsway",
        "city": "Vancouver",
        "postalCode": "V5N 2S7",
        "phoneNumber": "6047099355",
        "createdAt": "2017-04-04T09:45:36.763Z",
        "updatedAt": "2017-04-04T09:45:36.763Z"
      }
    ],
    "rateMyMDRating": []
  },
  {
    "id": 356,
    "firstName": "Gavin",
    "middleName": "Theodore",
    "lastName": "Kretzmer",
    "gender": "Male",
    "languages": "Afrikaans,Hebrew",
    "createdAt": "2017-04-04T09:45:36.688Z",
    "updatedAt": "2017-04-04T09:45:36.688Z",
    "contactInfo": [
      {
        "id": 175,
        "DoctorId": 356,
        "streetAddress": "3855 Puget Dr",
        "city": "Vancouver",
        "postalCode": "V6L 2T8",
        "phoneNumber": "6042265504",
        "createdAt": "2017-04-04T09:45:36.763Z",
        "updatedAt": "2017-04-04T09:45:36.763Z"
      }
    ],
    "rateMyMDRating": []
  },
  {
    "id": 370,
    "firstName": "Andries",
    "middleName": "Adriaan",
    "lastName": "Smit",
    "gender": "Male",
    "languages": "",
    "createdAt": "2017-04-04T09:45:36.688Z",
    "updatedAt": "2017-04-04T09:45:36.688Z",
    "contactInfo": [
      {
        "id": 189,
        "DoctorId": 370,
        "streetAddress": "683 Denman St",
        "city": "Vancouver",
        "postalCode": "V6G 2L3",
        "phoneNumber": "6045646644",
        "createdAt": "2017-04-04T09:45:36.763Z",
        "updatedAt": "2017-04-04T09:45:36.763Z"
      }
    ],
    "rateMyMDRating": []
  },
  {
    "id": 378,
    "firstName": "Gordon",
    "middleName": "Heung",
    "lastName": "De Yip",
    "gender": "Male",
    "languages": "",
    "createdAt": "2017-04-04T09:45:36.688Z",
    "updatedAt": "2017-04-04T09:45:36.688Z",
    "contactInfo": [
      {
        "id": 197,
        "DoctorId": 378,
        "streetAddress": "3317 Wesbrook Mall",
        "city": "Vancouver",
        "postalCode": "V6S 0B1",
        "phoneNumber": "6042597744",
        "createdAt": "2017-04-04T09:45:36.763Z",
        "updatedAt": "2017-04-04T09:45:36.763Z"
      }
    ],
    "rateMyMDRating": []
  },
  {
    "id": 345,
    "firstName": "Deborah",
    "middleName": "Anne",
    "lastName": "Curry",
    "gender": "Female",
    "languages": "",
    "createdAt": "2017-04-04T09:45:36.688Z",
    "updatedAt": "2017-04-04T09:45:36.688Z",
    "contactInfo": [
      {
        "id": 163,
        "DoctorId": 345,
        "streetAddress": "2736 41ST Ave E",
        "city": "Vancouver",
        "postalCode": "V5R 2X1",
        "phoneNumber": "6044303699",
        "createdAt": "2017-04-04T09:45:36.762Z",
        "updatedAt": "2017-04-04T09:45:36.762Z"
      }
    ],
    "rateMyMDRating": []
  },
  {
    "id": 374,
    "firstName": "Jan",
    "middleName": "Frederick",
    "lastName": "Venter",
    "gender": "Male",
    "languages": "Afrikaans",
    "createdAt": "2017-04-04T09:45:36.688Z",
    "updatedAt": "2017-04-04T09:45:36.688Z",
    "contactInfo": [
      {
        "id": 193,
        "DoctorId": 374,
        "streetAddress": "False Creek Healthcare,6th Floor 555 West 8th Ave.",
        "city": "Vancouver",
        "postalCode": "V5Z 1C6",
        "phoneNumber": "6047399695",
        "createdAt": "2017-04-04T09:45:36.763Z",
        "updatedAt": "2017-04-04T09:45:36.763Z"
      }
    ],
    "rateMyMDRating": []
  },
  {
    "id": 351,
    "firstName": "Justin",
    "middleName": "",
    "lastName": "Jay",
    "gender": "Male",
    "languages": "",
    "createdAt": "2017-04-04T09:45:36.688Z",
    "updatedAt": "2017-04-04T09:45:36.688Z",
    "contactInfo": [
      {
        "id": 170,
        "DoctorId": 351,
        "streetAddress": "108-3195 Granville Street",
        "city": "Vancouver",
        "postalCode": "V6H 3K2",
        "phoneNumber": "6047420016",
        "createdAt": "2017-04-04T09:45:36.763Z",
        "updatedAt": "2017-04-04T09:45:36.763Z"
      }
    ],
    "rateMyMDRating": []
  },
  {
    "id": 344,
    "firstName": "Behzad",
    "middleName": "",
    "lastName": "Borji",
    "gender": "Male",
    "languages": "",
    "createdAt": "2017-04-04T09:45:36.688Z",
    "updatedAt": "2017-04-04T09:45:36.688Z",
    "contactInfo": [
      {
        "id": 162,
        "DoctorId": 344,
        "streetAddress": "622 Bute St",
        "city": "Vancouver",
        "postalCode": "V6E 3M1",
        "phoneNumber": "6045583313",
        "createdAt": "2017-04-04T09:45:36.762Z",
        "updatedAt": "2017-04-04T09:45:36.762Z"
      }
    ],
    "rateMyMDRating": []
  },
  {
    "id": 377,
    "firstName": "Jonathan",
    "middleName": "Charles",
    "lastName": "Yang",
    "gender": "Male",
    "languages": "",
    "createdAt": "2017-04-04T09:45:36.688Z",
    "updatedAt": "2017-04-04T09:45:36.688Z",
    "contactInfo": [
      {
        "id": 196,
        "DoctorId": 377,
        "streetAddress": "Highroads Medical Clinics Kerrisdale,5960 East Boulevard",
        "city": "Vancouver",
        "postalCode": "V6M 3V4",
        "phoneNumber": "6042634750",
        "createdAt": "2017-04-04T09:45:36.763Z",
        "updatedAt": "2017-04-04T09:45:36.763Z"
      }
    ],
    "rateMyMDRating": []
  }
];


  function filterByCity(array, city) {
    const filtered = [];

    array.forEach(item => {
      if(item.contactInfo.length > 0) {
        item.contactInfo.forEach(contact => {
            if(contact.city === city) {
              filtered.push(item);
            }
        });
      }
    });
    return filtered;
  }

  // console.dir(filterByCity(docs, 'Surrey') ,{ depth: null });
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

const pageArray = [1,2,3,4,5,6,7,8,9,10,
                   11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                   21, 22, 23, 24, 25, 26, 27, 28 ,29, 30,
                  31, 32, 33, 34, 35, 36];






  // console.dir( filterByPage(pageArray, PAGE_SIZE, 3) ,{ depth: null });

  console.dir( pageCount(pageArray, PAGE_SIZE) ,{ depth: null });
