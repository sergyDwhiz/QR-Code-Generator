import express from 'express';
import qr from 'qr-image';
import bodyParser from 'body-parser';
import { dirname } from "path";
import { fileURLToPath } from "url";
import cors from 'cors'; //Cross-Origin Resource Sharing (CORS) is a mechanism that uses additional HTTP headers to tell browsers to give a web application running at one origin, access to selected resources from a different origin.

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000; 

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/generate-qr', (req, res) => { 
  const url = req.query.url;// Get URL from Query parameter

  if (!url) {
    return res.status(400).json({ error: 'Invalid URL' });
  }

  const qrPng = qr.image(url, { type: 'png' }); // Generate QR code
  res.type('png');
  qrPng.pipe(res); 

  qrPng.on('error', (error) => { 
    console.error(error);
    return res.status(500).json({ error: 'Failed to generate QR code' });
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

