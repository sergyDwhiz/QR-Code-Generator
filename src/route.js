const urlInput = document.getElementById('url-input');
const convertButton = document.getElementById('convert-button');
const successMessage = document.getElementById('success-message');
const errorMessage = document.getElementById('error-message');
const qrCodeDownloadLink = document.getElementById('qr-code-download');
const qrCodeImage = document.getElementById('qr-code-image');

convertButton.addEventListener('click', () => {
  const url = urlInput.value; 
  // convertButton.style.color='red';
   
  fetch('/generate-qr', { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },   
    body: JSON.stringify({ url })
  })
  .then(response => {
    if (response.ok) {
      // qrCodeImage.src = '/images/qr-code.png'; 
      // successMessage.style.display = 'block';
      // errorMessage.style.display = 'none';
      // return response.blob();
    } else {
      successMessage.style.display = 'none';
      errorMessage.style.display = 'block';
      throw new Error('Invalid URL, Enter a valid URL');
    }
  })
  .then(blob => {
    const objectURL = URL.createObjectURL(blob);
    qrCodeImage.src = objectURL;
    qrCodeDownloadLink.href = objectURL;
    qrCodeDownloadLink.download = '/images/qr-code.png';
  })
  .catch(error => {
    console.error('Error:', error);
  });
});
