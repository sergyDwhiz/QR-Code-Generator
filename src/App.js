import express from 'express';
import qr from 'qr-image';
import bodyParser from 'body-parser';
import { dirname } from "path";
import path from "path";
import { fileURLToPath } from "url";
import fs from 'fs';
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public')); //Render static files
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Allow Cross Origin Requests
  next();
}); 

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
}); 

app.post('/generate-qr', (req, res) => {
  const url = req.body.url; 

  const qrPng = qr.imageSync(url, { type: 'png' });
  const qrPngDataURL = `data:image/png;base64,${qrPng.toString('base64')}`;

  res.json({ path: qrPngDataURL });
});

app.get('/qr-code.png', (req, res) => {
  res.sendFile(__dirname + '/qr-code.png');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});