import { response } from "express";

const urlForm = document.getElementById('urlForm');
const urlInput = document.getElementById('urlInput');
const codeContainer= document.getElementById('qrCodeContainer');

  // convertButton.addEventListener('click', (event) => {
  //   event.preventDefault();
  //   const url = urlInput.value;

  //   fetch('/generate-qr-code', {
  //     method: 'POST', 
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ url })
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       if (data && data.path) {
  //         qrCodeImage.src = data.path;
  //         document.getElementById('qr-code-download-link').href = data.path;
  //         document.getElementById('success-message').style.display = 'block';
  //       } else {
  //         console.error('Invalid URL, Enter a valid URL');
  //         document.getElementById('error-message').style.display = 'block';
  //       }
  //     })
  //     .catch(error => console.error('Error:', error));
  // });
urlForm.addEventListener('submit', function(event)
{
  event.preventDefault();
  const url= urlInput.value;
  fetch(`/generate-qr?url=${encodeURIComponent(url)}`)
  .then(response=> response.text())
  .then(html=> {
codeContainer.innerHTML= html;
  })
  .catch(error=> {
    console.error('Error generating QR code:', error);
  });
});