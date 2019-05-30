const ScoresModel = require('../../models/scores.model');

const createItem = (body, userId) => {
	return new Promise((resolve, reject) => {
		const newScore = {
			score: body.score,
			user: body.user,
			date: new Date()
		};

		ScoresModel.create(newScore)
			.then((mongoResponse) => resolve(mongoResponse))
			.catch((mongoResponse) => reject(mongoResponse));
	});
};

const readItem = () => {
	return new Promise((resolve, reject) => {
		ScoresModel.find((error, score) => {
			if (error) reject(error);
			else {
				let scoreArray = [];

				(async function loop() {
					for (let i = 0; i < score.length; i++) {
						scoreArray.push(score[i]);
					}
					return resolve(scoreArray);
				})();
			}
		});
	});
};

module.exports = {
	createItem,
	readItem
};
