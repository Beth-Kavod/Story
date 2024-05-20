# Template File Sharing App README

## Project Name
Story

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Configuration](#configuration)
6. [Contributing](#contributing)
7. [License](#license)
8. [Contact](#contact)

## Introduction
Welcome to story! This application allows users to easily upload, share, and manage files in a secure and efficient manner. It is designed to be user-friendly and scalable, suitable for both personal and professional use.

## Features
- **User Authentication**: Secure user login and registration.
- **File Upload**: Upload files of various formats.
- **File Sharing**: Share files via unique links.
- **File Management**: Organize files into posts.
- **Access Control**: Set permissions for file access.
- **Responsive Design**: Use the app on any device.

## Installation
To get started with the Template File Sharing App, follow these steps:

### Prerequisites
- Node.js (version 14.x or higher)
- npm (version 6.x or higher) or yarn
- MongoDB (version 4.x or higher)

### Steps
1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/template-file-sharing-app.git
    cd template-file-sharing-app
    ```

2. **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3. **Set up environment variables:**
    Create a `.env` file in the root directory and add the following:
    ```env
    ApiHostname = "http://localhost/3000"
    ```

4. **Clone and setup the media server to run as well:**
    Go to https://github.com/Niko-Drossos/Express-Media-Storage.git and complete the instructions there to setup the server

5. **Start the application:**
    ```bash
    npm start
    # or
    yarn start
    ```

6. **Access the application:**
    Open your browser and navigate to `http://localhost:5173`.

## Usage
Once the application is running, you can perform the following actions:

1. **Register an Account:**
   - Go to the registration page and create a new account.

2. **Log In:**
   - Log in using your credentials.

3. **Upload Files:**
   - Navigate to the upload section and select files to upload.

4. **Share Files:**
   - Generate shareable links for uploaded files.

5. **Manage Posts:**
   - Organize files into posts and set access permissions.

## Configuration
### Environment Variables
The application can be configured using the following environment variables:

- `ApiHostname`: The destination of the attached express media server.

## Contributing
We welcome contributions from the community! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

Please ensure all pull requests adhere to the contribution guidelines and include relevant tests.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact
For any inquiries or feedback, please contact us at:
- **Email**: droniko777@gmail.com
- **Email**: nhadde445@west-mec.org
- **GitHub Issues**: [GitHub Issues](https://github.com/yourusername/template-file-sharing-app/issues)

Thank you for using **Story**!
