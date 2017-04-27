# find-a-gp-in-bc


A Node.js service that helps you find the best family doctor in British Columbia.

It scrapes data from the [College of Physicians and Surgeons of British Columbia](https://www.cpsbc.ca/physician_search) to find family doctors accepting new patients. It uses this data to search for any reviews present on [RateMDs](https://www.ratemds.com/). Doctor and Review records are persisted to a database, whose data is served to a [React client](https://github.com/nlazzari/dr-search-client) via a RESTful JSON API.




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

Seed the database with pre-scraped data (doctors accepting patients residing in the top 50 largest municipalities by population) by running this seeding script with the command
```
$ yarn run db:seed
```
or
```
$ npm run db:seed
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
The data scraping script can request physician data based on any of the form options given on the [College of Physicians](https://www.cpsbc.ca/physician_search) search page.

 Due to limitations with the number of requests allowed per time period (before refusing your connection and returning empty responses), the scraping script will only pull data for doctors residing in one particular city per run of the script.

At present the scraping script is run via a CLI that takes the desired city to query as an argument when executed. In the future this process will be automated by a job queue implementation which would step through a list of cities, and save doctor data for each one automatically.

 ### CLI
 To make the scraping of one city less tedious, the app has a [list of all BC municipalities](http://www2.gov.bc.ca/gov/content/data/statistics/people-population-community/population/population-estimates) sorted by decreasing population, stored in an array and exported for use. Instead of having to type the city name, you only provide its index in the list of cities.

 For example, to scrape all doctor data and associated reviews for Vancouver, you would run the scraper CLI like so:

 ```
 $ yarn run data:scrape -- 0
 ```

 This will scrape all doctors accepting new patients in Vancouver, their contact info, and reviews on RateMDs, and append the JSON data to a file found here:

 ```
 ./data/doctorData.dat
 ```

 This allows you to drill through the list of cities to query very quickly by repeating your terminal commands, changing only the city index argument each time, and the scraper will keep appending new data to the end of the data file.

 ### Helper Scripts
If you wish to only scrape specific cities, you can easily find their indices by running a helper script that prints a table of all cities and their indices:

```
$ yarn run data:city:list
                ...
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

 To find a specific city's index in the list, run this helper script with the city name as an argument (quotes are required for city names with spaces):

 ```
 $ yarn run data:city:index -- 'New Westminster'
 New Westminster has an index of 16.
 ```
 ```
 $ yarn run data:city:index -- Burnaby
 Burnaby has an index of 2.
 ```
 ```
 $ yarn run data:city:index -- Fantasia
 Sorry, Fantasia is not in the list.
 ```
 ### Scrubbing Data
 When satisfied with the amount of data collected, we need to "scrub" the data before saving it to the database using this script:

 ```
 $ yarn run data:scrub
 ```

 The scrubbing script removes any duplicate entries, unwanted formatting, and flattens the nested array structure found in the data file. The scrubbed data is assigned to an array constant that is exported for use inside this JavaScript file:

 ```
 ./data/doctorData.js
 ```

 ### Saving Data

 To persist the scrubbed data to the database, run the save script:

 ```
 $ yarn run data:save
 ```

 The script will do a graph insert to the Postgres data base, where all associated data will be placed in the correct tables automatically.

 ### Initializing Data

 Once you've saved the data, perhaps you want to start fresh and scrape some new data. To erase the contents of the doctor data files, run the init script:

 ```
 $ yarn run data:init
 ```
