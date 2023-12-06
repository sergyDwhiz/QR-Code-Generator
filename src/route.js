const urlInput = document.getElementById('url-input');
const convertButton = document.getElementById('convert-button');
const successMessage = document.getElementById('success-message');
const errorMessage = document.getElementById('error-message');
const qrCodeDownloadLink = document.getElementById('qr-code-download');
const qrCodeImage = document.getElementById('qr-code-image');

convertButton.addEventListener('click', () => {
  const url = urlInput.value; 

  fetch('http://localhost:3000/generate-qr', { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },   
    body: JSON.stringify({url})
  })
  .then(response => {
    console.log('Response status:', response.status); // Log the response status
    return response.json();
  })
  .then(data => {
    console.log('Response body:', data); // Log the response body
    if (data.path) {
      qrCodeImage.src = data.path; 
      successMessage.style.display = 'block';
      errorMessage.style.display = 'none';
    } else {
      throw new Error('Invalid URL, Enter a valid URL');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    successMessage.style.display = 'none';
    errorMessage.style.display = 'block';
  });
});
