// Get the elements from the DOM 
const qrCodeDisplay = document.getElementById('qr-code-display');
const successMessage = document.getElementById('success-message');
const errorMessage = document.getElementById('error-message');

// Function to generate QR code
function generateQRCode(url) {
  fetch('http://localhost:3000/generate-qr', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ url })
  })
  .then(response => response.json())
  .then(data => {
    if (data.qrCode) {
      // Create an img element to display the QR code
      const img = document.createElement('img');
      img.src = data.qrCode;
      qrCodeDisplay.appendChild(img);

      // Show success message and hide error message
      successMessage.style.display = 'block';
      errorMessage.style.display = 'none';
    } else {
      // Show error message and hide success message
      errorMessage.style.display = 'block';
      successMessage.style.display = 'none';
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
}