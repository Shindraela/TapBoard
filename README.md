# TapBoard

TapBoard is a game where user have to tap on a button as much as possible. Then, his score is saved and he can see the list of all the scores from other users.

## Getting Started

To run the project, first "npm install", then go into the folder and run "npm start" for starting the server. Then go into the /front folder and run "ng serve", you can now go to http://localhost:4200/ and create you an account for playing.

## Built With

* [Angular](https://angular.io/) - Popular mobile and desktop framework
* [MongoDB](https://www.mongodb.com/) - Fully managed cloud database
* [Express.js](https://expressjs.com/) - Minimalist web framework for Node.js

## Architecture

Once you have initialized the repo and went on http://localhost:4200, you are on register/login screen. If you don't have an account yet, you must register, otherwise enter your email and password to login. Once you are logged, you are on the /me page, where you can play on the tap button. The principle is simple : the more you click, the more your score become bigger. The purpose of this game is to have the biggest score of all ! To check your if you have a big score, you can click on "Scores" button and see the scores of other users who are trying to defeat you. Or if you want to logout yourself from the game, you can click on the "Logout" button.

## Acknowledgments

Client side, the form components are locateed in the /shared folder, as well as the header component.

In forms, the errors are displayed with form validator.

When you login the token is recovered in a cookie, and put in all requests with the token interceptor.
Then with the authguard, the routes are protected by checking if the cookie is still existing.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
