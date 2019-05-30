const ScoresModel = require('../../models/scores.model');
const UserModel = require('../../models/user.model');

const createItem = (body, userId) => {
	return new Promise((resolve, reject) => {
		const newScore = {
			content: body.content,
			author: body.user,
			date: new Date()
		};

		ScoresModel.create(newScore)
			.then((mongoResponse) => resolve(mongoResponse))
			.catch((mongoResponse) => reject(mongoResponse));
	});
};

const readItem = (body, userId) => {
	return new Promise((resolve, reject) => {
		ScoresModel.find((error, scores) => {
			if (error) reject(error);
			else {
				let scoresArray = [];
				(async function loop() {
					for (let i = 0; i < scores.length; ++i) {
						const user = await getScoresUser(scores[i].author);
						scoresArray.push({ user: user, scores: scores[i] });
					}

					return resolve(scoresArray);
				})();
			}
		});
	});
};

const getScoresUser = (id) => {
	console.log(id);
	return new Promise((resolve, reject) => {
		UserModel.findById(id, { email: 1, _id: 0 }, (error, user) => {
			if (error) return reject(error);
			else {
				console.log(user);
				return resolve(user);
			}
		});
	});
};

module.exports = {
	createItem,
	readItem,
	deleteItem
};
