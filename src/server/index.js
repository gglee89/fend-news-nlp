/**
 * SERVER FILE
 */
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 8080;

const app = require('./app');
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
