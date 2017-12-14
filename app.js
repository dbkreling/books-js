const express = require('express');
const request = require('request');
var app = express();
var bodyParser = require('body-parser');

app.get('/books', (req, res) => {
    request({
        url: 'https://www.googleapis.com/books/v1/volumes?q=title:java',
        json: true
    }, (err, response, body) => {
        res.send({
            title: body.items[0].volumeInfo.title,
            authors: body.items[0].volumeInfo.authors,
            ISBN: body.items[0].volumeInfo.industryIdentifiers[0].identifier
        });
    });
});


app.listen(3000, () => {
    console.log("server running on port 3000");
});


// https://www.googleapis.com/books/v1/volumes?q=title:java

// console.log(`Address: ${body.results[0].formatted_address}`);
// console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
// console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
