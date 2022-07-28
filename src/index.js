const express = require('express')
const app = express();
const morgan = require('morgan');

//configuration settings
app.set('port',  process.env.PORT || 3000);
app.set('json spaces', 2);

//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
app.use(require('./routes/index'));
app.use(require('./routes/agenda'));

//get up server
app.listen(app.get('port'), () => {
  console.log(`This server is on the port ${app.get('port')}`);
})