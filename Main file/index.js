import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

// Define a regular expression to validate the user input.
const urlRegex = /^(?:http(s)?:\/\/)?[a-zA-Z0-9-\.]+\.[a-zA-Z]{2,}(?::[0-9]{1,5})?(\/.*)?$/;

// Define an asynchronous function to generate the QR code.
async function generateQRCode(url) {
  // Validate the user input.
  if (!urlRegex.test(url)) {
    throw new Error("Invalid URL");
  }

  // Generate the QR code image.
  const qrCode = qr.image(url);

  // Write the QR code image to a file.
  await fs.promises.writeFile("qr_image.png", qrCode);
}

// Define an asynchronous function to save the URL to a file.
async function saveURL(url) {
  // Write the URL to a file.
  await fs.promises.writeFile("URL.txt", url);
}

// Define the main function.
async function main() {
  // Get the user input.
  const { URL } = await inquirer.prompt([
    {
      message: "Type in your URL: ",
      name: "URL",
      validate: (input) => {
        if (!urlRegex.test(input)) {
          return "Invalid URL";
        }

        return true;
      },
    },
  ]);

  // Generate the QR code.
  await generateQRCode(URL);

  // Save the URL to a file.
  await saveURL(URL);

  // Log a success message.
  console.log("The QR code and URL have been generated successfully!");
}

// Call the main function.
main().catch((error) => {
  // Log the error.
  console.error(error);
});

/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

