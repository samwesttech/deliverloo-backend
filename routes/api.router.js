const apiRouter = require('express').Router();
const toiletsRouter = require('./toilets.router');

apiRouter.use('/toilets', toiletsRouter);

module.exports = apiRouter;