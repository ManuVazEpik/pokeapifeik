const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {

    res.send('Hello World!');

});

app.post('/team/pokemon', () => {

    res.status(200).send('Helo World!');

})

app.get('/team', () => {

    res.status(200).send('Helo World!');

})

app.delete('/team/pokemon/:pokeid', () => {

    res.status(200).send('Helo World!');

})

app.put('/team', () => {

    res.status(200).send('Helo World!');

})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

exports.app = app;