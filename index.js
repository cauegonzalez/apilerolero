const express = require('express')
const cors = require('cors')
const lerolero = require('lerolero')

const app = express();

app.use(cors());
app.get("/", (req, res) => {
    const frase = lerolero();
    res.send({phrase: frase});
});

app.listen(5000);