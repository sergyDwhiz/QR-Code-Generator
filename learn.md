
# QR Code Lookup

This project is a simple Node.js application that generates a QR code for a given URL, and looks up the URL on a web browser when the QR code is scanned.

## Prerequisites

Before getting started, you will need to have the following installed on your machine:

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository to your local machine using the following command:

```
git clone https://github.com/Sergius-Nyah/QR-Code-Generator.git
```

2. Install the project dependencies by running the following command in the project directory:

```
npm install
```

3. Create a `.env` file in the root directory of the project and add the following line to it:

```
NODE_PATH=./node_modules
```

This tells Node.js to look for modules in the `node_modules` directory relative to the root directory of the project.

## Usage

To use this project, follow these steps:

1. Start the application by running the following command in the project directory:

```
npm start
```

2. Open a web browser and navigate to `http://localhost:3000`.

3. Enter a URL into the input field and click "Generate QR Code".

4. Scan the QR code with a QR code reader on your mobile device.

5. The web browser should automatically navigate to the URL that was entered.

## Collaborating

If you would like to collaborate on this project, follow these steps:

1. Fork the repository to your GitHub account.

2. Clone the forked repository to your local machine.

3. Create a new branch for your changes:

```
git checkout -b my-feature-branch
```

4. Make your changes and commit them using lovely commit messages.

5. Push your changes to your forked repository:

```
git push origin my-feature-branch
```

6. Create a pull request from your forked repository to the original repository.

Thank you :); 