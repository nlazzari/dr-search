# find-a-gp-in-bc


A Node.js service that helps you find the best family doctor in British Columbia.

It scrapes data from the [College of Physicians and Surgeons of British Columbia](https://www.cpsbc.ca/physician_search) to find family doctors accepting new patients. It uses this data to search for any reviews present on [RateMDs](https://www.ratemds.com/). Doctor and Review records are persisted to a database, and served to a [React client](https://github.com/nlazzari/dr-search-client) via a RESTful JSON API.




## Dependencies
 ### Scraping
  - [request-promise-native](https://github.com/request/request-promise-native) - a simple HTTP request library that uses ES6 Promises. Used to request and receive pages from the sites mentioned above to be parsed into usable data.
  - [cheerio](https://github.com/cheeriojs/cheerio) - takes raw HTML pages from request-promise-native, and creates a simplified DOM that may be traversed using jQuery style syntax.

### Database
 - [PostgreSQL](https://www.postgresql.org/) - database to persist all scraped physician data.
 - [node-postgres](https://github.com/brianc/node-postgres) - a Node client to connect to the PostgreSQL database.
 - [knex](https://github.com/tgriesser/knex)- a database query builder with features like migrations, connection pooling, seeding, and a promise-based callback API.
 - [Objection.js](https://github.com/Vincit/objection.js/) - a simple ORM built on knex that is low on _magic_. It has a very simple way of creating models, and relationships between them.

### API Server
 - [Express](https://github.com/expressjs/express/) - web server framework for Node.
 - [body-parser](https://github.com/expressjs/body-parser) - middleware that parses incoming request bodies to a convenient req.body variable.


## Installation
### PostgreSQL
First, ensure that PostgreSQL is installed, and that you have a user account with admin rights. Add your username and password to the environment variable file located here:
```
./config/env.js
```

Create the Postgres databases described in:
```
./config/knexfile.js
```

### NPM Packages
Then, pull in the npm packages using either:

```
$ yarn install
```
or
```
$ npm install
```  

### Knex Migrations
Next, run the knex migrations, which will create all the necessary database tables for the project:
```
$ knex migrate:latest
```  

Seed the database with pre-scraped data by running this job script:
```
$ node jobs/seedDoctorData.js
```

### Server
Lastly, start the server with either:
```
$ yarn start
```
 or
```
$ npm start
```  

To use the service, please see the repo for the [React client](https://github.com/nlazzari/dr-search-client).


## Scraping Data
### Background
 Due to limitations of how many requests can be made to the data source sites at one time (before they refuse your connection and return empty responses), the scraping script will only pull data for one city per run of the script. In the future, this process will be automated by a job queue implementation. At present the scraping script is run via CLI that takes the desired city as an argument when executed.

 ### CLI
 To make the scraping of one city less tedious, the app has a list of all BC municipalities, sorted by decreasing population, stored in an array and exported for use. Instead of having to type the city name, you only provide its index in the list of cities.

 For example, to scrape all doctor data and associated reviews for Vancouver, you would run the scraper CLI like so:

 ```
 $ node jobs/scrapeDoctorDataCLI.js 0
 ```

 This will scrape all doctors accepting new patients in Vancouver, their reviews, and contact info and append the JSON data to a text file found here:

 ```
 ./data/doctorData.txt
 ```

 This allows you to drill through the list of cities quickly by repeating your terminal commands, changing only the city index each time, and the scraper will keep appending new data to the data file.

 ### Helper Scripts
If you wish to only scrape specific cities, you can easily find their indices by running a helper script that prints a table of all cities and their indices:

```
$ node data/printCityList.js
Index			City
------------------------------------------
   0			Vancouver
   1			Surrey
   2			Burnaby
   3			Richmond
   4			Langley
   5			Coquitlam
                ...
```

 To find a specific city's index, run this helper script with the city name as an argument (quotes are required for city names with spaces):

 ```
 $ node data/printCityIndex.js 'New Westminster'
 16
 ```

 ### Scrubbing Data
 When satisfied with the data collected, we need to "scrub" the data first before saving it to the database. The scrubbing script removes any duplicated entries, unwanted formatting, and flattens the nested array structure.

 ```
 $ node jobs/scrubDoctorData.js
 ```
