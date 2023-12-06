import express from 'express';
import qr from 'qr-image';
import bodyParser from 'body-parser';
import { dirname } from "path";
import path from "path";
import { fileURLToPath } from "url";
import fs from 'fs';
import cors from 'cors';
import { dirname } from "path";
import { fileURLToPath } from "url";
import express from 'express';
import qr from 'qr-image';
import bodyParser from 'body-parser';
import fs from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public')); //Render static files

app.post('/generate-qr-code', (req, res) => {
  const url = req.body.url;

  if (!url) {
    return res.status(400).json({ error: 'Invalid URL' });
  }

  const qrPng = qr.image(url, { type: 'png' });

  qrPng.on('error', (error) => { 
    console.error(error);
    return res.status(500).json({ error: 'Failed to generate QR code' });
  });

  const qrCodePath = 'public/qr-code.png';
  const qrCodeStream = qrPng.pipe(fs.createWriteStream(qrCodePath));

  qrCodeStream.on('finish', () => {
    res.json({ path: `/${qrCodePath}` });
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
