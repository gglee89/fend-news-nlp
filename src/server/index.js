const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 8080;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.sendFile('dist/index.html')
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
})
