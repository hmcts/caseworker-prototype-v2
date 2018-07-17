const express = require('express');
const router  = express.Router();

router.use('/', require('./routes/jui'));
router.use('/', require('./routes/questions'));

router.get('/', function (req, res) {
	res.render('index');
});

module.exports = router;
