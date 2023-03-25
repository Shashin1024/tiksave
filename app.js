const express = require('express');
const cors = require('cors');
const tiktok = require('.');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
app.use(bodyParser.json());

app.use(cors({
  origin: "*",
}));

app.post('/tiktok', (req, res) => {
  const url = (req.body.url).toString();
  const slider_url = 'https://vt.tiktok.com/ZS8e1HeEs/';

  Promise.all([
    tiktok.tiklydown(url),
    tiktok.dlpanda(slider_url),
  ])
    .then(([tiklydownResult, dlpandaResult]) => {
      res.json({ tiklydownResult, dlpandaResult });
    })
    .catch((e) => {
      console.log(e);
      res.status(500).send('An error occurred');
    });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
