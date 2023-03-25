const express = require('express');
const tiktok = require('.');
const app = express();
const port = 3000;

app.get('/', function(req, res) {
  const url = 'https://www.tiktok.com/@__kaviii.girl__/video/7195959183362116891?is_from_webapp=1&sender_device=pc';
  const slider_url = 'https://vt.tiktok.com/ZS8e1HeEs/';
  
  tiktok.tiklydown(url)
    .then(result => {
      console.log(result);
      res.send(result);
    })
    .catch(e => {
      console.log(e);
      res.send(e);
    });

  tiktok.dlpanda(slider_url)
    .then(result => {
      console.log(result);
      res.send(result);
    })
    .catch(e => {
      console.log(e);
      res.send(e);
    });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
