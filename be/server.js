const PORT = 8080;

const app = require('express')();
const cors = require('cors');
const data = require('./data.json');

app.use(cors());

app.get('/', (req, res) => {
  res.send(JSON.stringify(data));
});

app.get('/health', (req, res) => {
  res.sendStatus(200);
});

app.get('/ready', (req, res) => {
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Server started at port :${PORT}`);
});
