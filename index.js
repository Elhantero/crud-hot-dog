const express = require('express');
const routes = require('./app/routes');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.use(expressLayouts);

app.use(routes);

app.listen(port, () => {
    console.log(`app listening on ${port}`);
});
