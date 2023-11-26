# QR-Code-Generator.
This is a QR Code Generator project built with Node.js and Express. It provides a simple API for generating QR codes based on user input.

# Dependencies
The project relies on the following dependencies:
Express, Body-parser: Middleware for parsing incoming request bodies.
Google Auth Library: A library for implementing Google Sign-In API.

# Installation
To run the QR Code Generator project locally, follow these steps:

1. Clone the repository:
git clone https://github.com/Sergius-Nyah/QR-Code-Generator.git
2. Navigate to the project dir:
cd QR-Code-Generator
3. Install dependencies
npm i express body-parser qrcode google-auth-library
4. Start the server:
npm start
5. Access the API at http://localhost:3000.

# Usage
To generate a QR code, send a POST request to the /qr-code endpoint with the desired URL as the request body. The server will respond with a downloadable QR code image.

Example request using cURL:
curl -X POST -H "Content-Type: application/json" -d '{"url": "https://example.com"}' http://localhost:3000/qr-code

# Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a PR (:)..:



 
