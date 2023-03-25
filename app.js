const express = require('express');
const cors = require('cors');
const tiktok = require('.');
const bodyParser = require('body-parser');

const app = express();
const port = 3000
app.use(bodyParser.json());

app.use(cors({
    origin: "http://localhost:80",
}))

app.post('/tiktok', (req, res) => {
  const url = (req.body.urll).toString();
  const slider_url = 'https://vt.tiktok.com/ZS8e1HeEs/';
  
  tiktok.tiklydown(url)
    .then(result => {
       //res.json(url);
        res.json(result);
    })
    .catch(e => {
      console.log(e);
      res.status(500).send('An error occurred');
    });

  tiktok.dlpanda(slider_url)
    .then(result => {
      res.json(result);
    })
    .catch(e => {
      console.log(e);
      res.status(500).send('An error occurred');
    });
});

app.listen(process.env.port || port, () => {
  console.log('Server listening on port ${port}');
});
