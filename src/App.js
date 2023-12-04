const express = require('express');
const qr = require('qr-image');
const path = require('path');
const {fileURLToPath} = require('url');
const { dirname } = require( 'path');

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); 

app.post("/generate-qr", (req, res) => {
  const { url } = req.body;
  const qr_svg = qr.imageSync(url, { type: "svg" });
  const qrCode = qr_svg.toString();
  const qrCodeBase64 = Buffer.from(qrCode).toString('base64');
  res.render('qr', { qrCodeBase64 });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});