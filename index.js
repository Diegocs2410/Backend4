const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use('Port', 4000);
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: '*' }));

app.listen(app.get('port'), function () {
  console.log('listening on port: ' + app.get('port'));
});
