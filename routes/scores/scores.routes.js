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
	/* 
    Injection de Passport dans la class du Router
    Passeport sera utiliser en middleware afin d'authentifier l'utilisateur avant se requête
    */
	constructor({ passport }) {
		this.passport = passport;
	}
	//

	routes() {
		// Read : afficher la liste des messages du chat
		scoresRouter.get('/', (req, res) => {
			readItem()
				.then((apiResponse) => sendApiSuccessResponse(res, 'Chat received', apiResponse))
				.catch((apiResponse) => sendApiErrorResponse(res, 'Error during fetch', apiResponse));
		});

		// Create : ajout de Passport en middleware
		scoresRouter.post('/', this.passport.authenticate('jwt', { session: false }), (req, res) => {
			// Error: no body present
			if (typeof req.body === 'undefined' || req.body === null) {
				sendBodyError(res, 'No body data provided');
			}
			// Check fields in the body
			const { miss, extra, ok } = checkFields([ 'content' ], req.body);
			//=> Error: bad fields provided
			if (!ok) {
				sendFieldsError(res, 'Bad fields provided', miss, extra);
			} else {
				//=> Request is valid: use controller
				createItem(req.body, req.user._id)
					.then((apiResponse) => sendApiSuccessResponse(res, 'Chat message is created', apiResponse))
					.catch((apiResponse) =>
						sendApiErrorResponse(res, 'Error during chat message creation', apiResponse)
					);
			}
		});
	}

	init() {
		this.routes();
		return scoresRouter;
	}
}

module.exports = ScoresRouterClass;
