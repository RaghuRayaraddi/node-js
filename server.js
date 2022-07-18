const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require("dotenv").config();
const PORT = process.env.PORT || 4000;
require('./config/db')


//  Method 1
// to convert req body to json
// app.use(express.json({ extended: true, limit: "50mb", strict: false }))
// app.use(bodyParser.json({ limit: "50mb", strict: false }));
// app.use(express.urlencoded({ extended: true, limit: "50mb", parameterLimit: 50000 }))


//  Method 2
app.use([
    express.json({ extended: true, limit: "50mb", strict: false }),
    bodyParser.json({ limit: "50mb", strict: false }),
    express.urlencoded({ extended: true, limit: "50mb", parameterLimit: 50000 }),
    cors()
])


app.use('/data', (req, res) => {
    console.log(req.body);
    res.send(req.body)
});





app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})