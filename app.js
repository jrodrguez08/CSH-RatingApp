import express from 'express';
import bodyParser from 'body-parser';
import routes from './server/routes/index';
import mongoose from 'mongoose';

const app = express();

const port = 8080;

app.use(bodyParser.urlencoded({
  extended: true,
  limit: '1mb'
}));

app.use(bodyParser.json({
  limit: '1mb'
}));

// set of routes
routes(app);

app.listen(port, function () {
  console.log(`listening for localhost in port ${port}`);
});

mongoose.connect('mongodb://localhost:27017/random');