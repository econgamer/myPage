const path = require('path');
const http = require('http');
const express = require('express');


const mongoose = require('mongoose');

const publicPath = path.join(__dirname, '../public');

const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);



var connectionUrl = 'mongodb://admin:admin@ds155091.mlab.com:55091/databasetesting';

mongoose.connect(connectionUrl);
mongoose.connection.once('open', () => console.log('Database is ready!'))
                    .on('error', (error) => {
                      console.warn('Warning, error');
                    });

app.use(express.static(publicPath));



server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
