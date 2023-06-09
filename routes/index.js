const router = require('express').Router();

//imports routes from /api/index.js
const apiRoutes = require('./api');

//adds pregix of /api to al api routes
router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).send('<h1>404 Error!</h1>');
});

module.exports = router;