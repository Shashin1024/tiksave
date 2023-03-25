const tiktok = require('.')
const url = 'https://www.tiktok.com/@__kaviii.girl__/video/7195959183362116891?is_from_webapp=1&sender_device=pc'
const slider_url = 'https://vt.tiktok.com/ZS8e1HeEs/'

tiktok.tiklydown(url)
     .then(result => {
          console.log(result)
     })
     .catch(e => console.log(e))

tiktok.dlpanda(slider_url)
     .then(result => {
          console.log(result)
     })
     .catch(e => console.log(e))