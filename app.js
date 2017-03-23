const Express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');


// Load routers from the routes folder
const home = require('./routes/home');
const find = require('./routes/find');

// Create an instance of Express by calling the Express function
const app = Express();

//Configure Express app to use ejs templating for our app's view engine
app.set('view engine', 'ejs');

//expose the static asset folder 'public' to the client
app.use(Express.static(path.join(__dirname, 'public')));

// parse body of http request to req.body
app.use(bodyParser.urlencoded({ extended: false }));

// adds cookie object to response (res.cookie).
app.use(cookieParser());


// unlike get (which only intercepts get method request),
// use intercepts ALL requests
app.use(logger('dev'));

//Register routes
app.use('/', home);
app.use('/physician_search', find);

const PORT = 4545;
app.listen(PORT, function() {
  console.log(`Server listening on http://localhost:${PORT}`);
});

//////////
