const urlInput = document.getElementById('url-input');
const convertButton = document.getElementById('convert-button');
const successMessage = document.getElementById('success-message');
const errorMessage = document.getElementById('error-message');
const qrCodeDownloadLink = document.getElementById('qr-code-download');
const qrCodeImage = document.getElementById('qr-code-image');

convertButton.addEventListener('click', () => {
  const url = urlInput.value; 

  fetch('/generate-qr', { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },   
    body: JSON.stringify({url})
  })
  .then(response => response.json())
  .then(data => {
    if (data && data.path) {
      qrCodeImage.src = data.path; 
    } else {
      console.error('Invalid URL, Enter a valid URL');
    }
  })
  .catch(error => console.error('Error:', error)); 
  
});