// app requires
const express = require(`express`);
const bodyParser = require(`body-parser`);
const Joi = require(`joi`);
const morgan = require(`morgan`);
const crossenv = require(`cross-env`);
const dotenv = require(`dotenv`);
const home = require(`./routes/home`);
const sendMessage = require(`./routes/sendMessage`);
const errorController = require(`./controllers/error`);

// creating express application
const app = express();

// using dotenv
dotenv.config({path: `./config/config.env`});

// setting port
const PORT = process.env.PORT || 3000;

// using morgan
if(process.env.NODE_ENV === `development`)
  app.use(morgan(`dev`));

// using body-parser
app.use(bodyParser.urlencoded({extended: false}));

// using ejs
app.set(`view engine`, `ejs`);
app.set(`views`, `views`);

// setting static folder
app.use(express.static(`public`));

// using page
app.use(home);
app.use(sendMessage);
app.use(errorController.get404);

// add listener
app.listen(
  PORT,
  console.log(`listning to server in ${process.env.NODE_ENV} mode on port ${PORT} ...`)
);