const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors({origin: '*'}));

//Routes
app.use(require('./routes/Routes.js'));

app.listen(3001);
console.log('server in 3001');