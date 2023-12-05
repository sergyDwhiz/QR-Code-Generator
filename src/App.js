import express from 'express';
import QRCode from 'qr-image';
import bodyParser from 'body-parser';
import fs from 'fs';
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/generate-qr', (req, res) => {
  const url = req.body.url;

  QRCode.toFile(dirname + '/images/qr-code.png', url, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error generating QR code');
    } else {
      res.sendFile(__dirname + '/images/qr-code.png');
    }
  });
});

app.get('/qr-code.png', (req, res) => {
  res.sendFile(__dirname + '/images/qr-code.png');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});