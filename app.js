const express = require('express');
const request = require('request');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/books', (req, res) => {
    var theme = req.query.theme;
    request({
        url: `https://www.googleapis.com/books/v1/volumes?q=title:${theme}`,
        json: true
    }, (err, response, body) => {
        var a = [];
        for (var i = 0; i < 10; i++) {
            a.push({
                    title: body.items[i].volumeInfo.title,
                    authors: body.items[i].volumeInfo.authors,
                    ISBN: body.items[i].volumeInfo.industryIdentifiers[0].identifier
                });
        }
        res.send(a);
    });
});

app.listen(3000, () => {
    console.log("server running on port 3000");
});
