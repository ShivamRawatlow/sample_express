const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(cors());

const data = {
  data: [
    {
      Category: 'LED Lights',
      Type: 'Flood Light',
      Image: 'https://goldtechscales.com/Admin/UploadImage/Claire-Flood.png',
      'Company Name': 'Goldtech',
    },
    {
      Category: 'LED Lights',
      Type: 'Track Light',
      Image: 'https://goldtechscales.com/Admin/UploadImage/track-light.jpg',
      'Company Name': 'Goldtech',
    },
    {
      Category: 'LED Lights',
      Type: 'Spot Light',
      Image:
        'https://goldtechscales.com/Admin/UploadImage/Astre-COB-Spotlight.png',
      'Company Name': 'Goldtech',
    },
    {
      Category: 'LED Lights',
      Type: 'Street Light',
      Image: 'https://goldtechscales.com/Admin/UploadImage/Lustre-Street.png',
      'Company Name': 'Goldtech',
    },
    {
      Category: 'LED Lights',
      Type: 'Strip Light',
      Image: 'https://goldtechscales.com/Admin/UploadImage/strip-light.jpg',
      'Company Name': 'Goldtech',
    },
    {
      Category: 'LED Lights',
      Type: 'Down Light',
      Image:
        'https://goldtechscales.com/Admin/UploadImage/Astre-SMD-Downlight-3.png',
      'Company Name': 'Goldtech',
    },
    {
      Category: 'LED Lights',
      Type: 'Conceal Light',
      Image: 'https://goldtechscales.com/Admin/UploadImage/hally.jpg',
      'Company Name': 'Goldtech',
    },
    {
      Category: 'LED Lights',
      Type: 'Tube Light',
      Image: 'https://www.goldtechlighting.com/images/Dazzle-T5-Square.png',
      'Company Name': 'Goldtech',
    },
    {
      Category: 'LED Lights',
      Type: ' Panel Light',
      Image:
        'https://goldtechscales.com/Admin/UploadImage/Orisun-Slim-panel.png',
      'Company Name': 'Goldtech',
    },
    {
      Category: 'LED Lights',
      Type: 'Conceal Light Fixture',
      Image: 'https://m.media-amazon.com/images/I/41gOyAra-WL._SX679_.jpg',
      'Company Name': 'Philips',
    },
    {
      Category: 'LED Lights',
      Type: 'Concealed Light',
      Image: 'https://m.media-amazon.com/images/I/41gOyAra-WL._SX679_.jpg',
      'Company Name': 'FOS',
    },
    {
      Category: 'Infrared Thermometer',
      Type: 'Infrared Thermometer',
      Image:
        'https://goldtechscales.com/images/Infrared%20Thermometer%20banner.jpeg',
      'Company Name': 'Goldtech',
    },
  ],
};

app.get('/', (req, res) => {
  res.send(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
