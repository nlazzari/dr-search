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
First, ensure that PostgreSQL is installed, and that you have a user account with admin rights. Add your username and password to the environment variable file located here:
```
./config/env.js
```

Create the Postgres databases described in:
```
./config/knexfile.js
```

Then, pull in the npm packages using either:

```
$ yarn install
```
or
```
$ npm install
```  


Next, run the knex migrations, which will create all the necessary database tables for the project:
```
$ knex migrate:latest
```  

Seed the database with pre-scraped data by running this job script:
```
$ node jobs/seedDoctorData.js
```

Lastly, start the server with either:
```
$ yarn start
```
 or
```
$ npm start
```  

To use the service, please see the repo for the [React client](https://github.com/nlazzari/dr-search-client).
