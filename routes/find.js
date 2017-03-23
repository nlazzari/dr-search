const Express   = require('express');
const router    = Express.Router();



router.post('/', function(req, res) {
  res.send(req.body);
  console.log(req.body);
});

router.get('/', function(req, res) {
  res.send(req.body);
  console.log(req.body);
});

// when this file is required, it will receive the object
// assigned to module.exports
module.exports = router;


















/////////////////
