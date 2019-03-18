/* eslint-disable no-console */
/* eslint-disable no-undef */

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(morgan("combinedend"));
app.use(bodyParser.json());
app.use(cors());

//test out server running
app.get('/status', (req, res) => {
    res.send({
        message: 'hello world'
    })
})

app.listen(process.env.PORT || 8081);
