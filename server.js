const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const menuData = require('./data/menuData.json');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/menu', (req, res) => {
    res.render('menu');
});

app.get('/api/menu', (req, res) => {
    res.json(menuData);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
