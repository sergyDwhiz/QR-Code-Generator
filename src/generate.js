import express from "express"; // Imports the express package, which would serve as our server
import qr from "qr-image"; // Imports the qr-image package, which would help us generate the QR code

const app = express(); // Creates an instance of the express server
const port = 3000; // Sets the port to 3000

app.use(express.json()); // Middleware to the Express application that parses incoming requests with JSON payloads,
// hence making the data available on the req.body

app.post("/generate-qr", (req, res) => { // Creates a POST route on the /generate-qr endpoint
  const { url } = req.body; 

  const qr_svg = qr.imageSync(url, { type: "svg" });
  const qrCode = qr_svg.toString();

  const htmlResponse = `
  <html>
    <head>
      <title>Generated QR Code</title>
    </head>
    <body>
      <h1>Generated QR Code</h1>
      <img src="data:image/svg+xml;base64,${Buffer.from(qrCode).toString('base64')}" alt="QR Code">
    </body>
  </html>
`;

res.send(htmlResponse);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

