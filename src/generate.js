import express from "express";
import qr from "qr-image";

const app = express();
const port = 3000;

app.use(express.json());

app.post("/generate-qr", (req, res) => {
  const { url } = req.body;

  const qr_svg = qr.imageSync(url, { type: "svg" });
  const qrCode = qr_svg.toString();

  res.json({ qrCode });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
