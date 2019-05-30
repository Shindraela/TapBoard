const mongoose = require('mongoose');
const { Schema } = mongoose;

const scoresSchema = new Schema({
	score: String,
	user: String,
	date: Date
});

const ScoresModel = mongoose.model('scores', scoresSchema);
module.exports = ScoresModel;
