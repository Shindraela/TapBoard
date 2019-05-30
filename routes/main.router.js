const { Router } = require('express');
const AuthRouterClass = require('./auth/auth.routes');
const ScoresRouterClass = require('./scores/scores.routes');

const passport = require('passport');
const { setAuthentication } = require('../services/authentication');
setAuthentication(passport);

const mainRouter = Router();
const apiRouter = Router();

const authRouter = new AuthRouterClass();
const scoresRouter = new ScoresRouterClass({ passport });

mainRouter.use('/api', apiRouter);
apiRouter.use('/auth', authRouter.init());
apiRouter.use('/scores', scoresRouter.init());

module.exports = { mainRouter };
