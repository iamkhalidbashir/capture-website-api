import express from 'express';
import {capture, latestCapture, latestCapturePage, showResults, template} from "./helpers.js";

const port = process.env.PORT || 8080;
const app = express();

// Add headers before the routes are defined
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/capture', capture);
app.get('/template', (req, res) => template(req, res).catch(e => res.status(500).send(e?.message)));
if (showResults()) {
    app.get('/', latestCapturePage);
    app.get('/latest', latestCapture);
}

app.listen(port, () => console.log(`listening at port ${port}...`));