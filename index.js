const express = require('express');
const routes = require('./app/routes');

const app = express();
const port = process.env.PORT || 8080;

app.use(routes);

app.listen(port, () => {
    console.log(`app listening on ${port}`);
});
