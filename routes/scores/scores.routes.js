const express = require('express');
const scoresRouter = express.Router();
const {
	sendBodyError,
	sendFieldsError,
	sendApiSuccessResponse,
	sendApiErrorResponse
} = require('../../services/server.response');
const { checkFields } = require('../../services/request.checker');
const { createItem, readItem } = require('./scores.controller');

class ScoresRouterClass {
	constructor({ passport }) {
		this.passport = passport;
	}

	routes() {
		// Get all scores
		scoresRouter.get('/', this.passport.authenticate('jwt', { session: false }), (req, res) => {
			readItem()
				.then((apiResponse) => sendApiSuccessResponse(res, 'Scores received', apiResponse))
				.catch((apiResponse) => sendApiErrorResponse(res, 'Error during fetch', apiResponse));
		});

		// Create new score
		scoresRouter.post('/score', this.passport.authenticate('jwt', { session: false }), (req, res) => {
			if (typeof req.body === 'undefined' || req.body === null) {
				sendBodyError(res, 'No body data provided');
			}

			const { miss, extra, ok } = checkFields([ 'score', 'user' ], req.body);

			if (!ok) {
				sendFieldsError(res, 'Bad fields provided', miss, extra);
			} else {
				createItem(req.body, req.user._id)
					.then((apiResponse) => sendApiSuccessResponse(res, 'Score is created', apiResponse))
					.catch((apiResponse) => sendApiErrorResponse(res, 'Error during score creation', apiResponse));
			}
		});
	}

	init() {
		this.routes();
		return scoresRouter;
	}
}

module.exports = ScoresRouterClass;
