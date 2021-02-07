const toiletsRouter = require('express').Router();
const { getToilet, addNewToilet, getToiletById } = require('../controllers/toilets.controller.js');



toiletsRouter.route('/').get(getToilet).post(addNewToilet);
toiletsRouter.get('/:toiletId', getToiletById);

module.exports = toiletsRouter;
