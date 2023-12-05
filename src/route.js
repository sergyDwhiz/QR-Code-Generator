const urlInput = document.getElementById('url-input');
const convertButton = document.getElementById('convert-button');
const successMessage = document.getElementById('success-message');
const errorMessage = document.getElementById('error-message');
const qrCodeDownloadLink = document.getElementById('qr-code-download');

convertButton.addEventListener('click', () => {
  const url = urlInput.value; 
  convertButton.style.color='red';
   
  fetch('/generate-qr', { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },   
    body: JSON.stringify({ url })
  })
  .then(response => {
    if (response.ok) {
      successMessage.style.display = 'block';
      errorMessage.style.display = 'none';
      return response.blob();
    } else {
      successMessage.style.display = 'none';
      errorMessage.style.display = 'block';
      throw new Error('Invalid URL, Enter a valid URL');
    }
  })
  .then(blob => {
    const qrCodeURL = URL.createObjectURL(blob);
    qrCodeDownloadLink.href = qrCodeURL;
  })
  .catch(error => {
    console.error('Error:', error);
  });
});