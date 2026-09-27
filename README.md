# Planet Weight Calculator — AWS S3 Deployment

The Planet Weight Calculator is a simple web application that calculates a person's weight on different planets. I built the application using HTML, CSS, and JavaScript and deployed it as a static website using Amazon S3.

## Project Overview

The application allows users to enter their weight and select a planet to calculate their corresponding weight on that planet.

### Technologies Used
HTML
 CSS
 JavaScript
 Amazon S3
 Git and GitHub

## AWS S3 Deployment

The main purpose of this project was to get hands-on experience deploying a static web application on Amazon S3.

The deployment process was:

```text
HTML / CSS / JavaScript Application
                |
                v
           Amazon S3
                |
                v
      Static Website Hosting
                |
                v
          Live Website
```

## Deployment Process

### 1. Creating the S3 Bucket

I created an S3 bucket specifically for hosting the Planet Weight Calculator.

Bucket Name:

`planet-weight-calculator-falak-2026`

AWS Region:

`ap-south-1 (Mumbai)`

![S3 Bucket](screenshots/s3-bucket.png)

### 2. Uploading the Application Files

After creating the bucket, I uploaded the files required to run the application.

The uploaded files were:

* `index.html`
* `index.css`
* `main.js`
* `6.png`

![Uploaded Files](screenshots/uploaded-files.png)

### 3. Enabling Static Website Hosting

I enabled Static Website Hosting from the S3 bucket properties.

The index document was configured as:

```text
index.html
```

This allows S3 to use `index.html` as the main page when the website is opened.

![Static Website Hosting](screenshots/static-hosting.png)

### 4. Configuring the Bucket Policy

I configured an S3 bucket policy to allow users to access the website files.

The policy allows the `s3:GetObject` action for objects inside the bucket. This allows the browser to retrieve the HTML, CSS, JavaScript, and image files required by the application.

### 5. Accessing the Deployed Website

After configuring the bucket and website hosting, I accessed the application through the S3 website endpoint.

The deployed website can be opened directly in a browser.

![Live Website](screenshots/live-website.png)

## Application Features

* Enter weight in kilograms
* Select a planet
* Calculate the equivalent weight
* Simple and easy-to-use interface
* JavaScript-based calculations
* Runs directly in the browser without a backend

## Project Demo

[View the project demo](demo/s3_bucket.mp4)

The demo shows the Planet Weight Calculator running as a deployed web application.

## AWS Concepts Demonstrated

Through this project, I gained practical experience with:

* Creating an S3 bucket
* Selecting an AWS region
* Uploading files to S3
* Enabling static website hosting
* Configuring an index document
* Creating and applying an S3 bucket policy
* Managing public access for website files
* Deploying a static website on AWS
* Accessing a website through an S3 website endpoint

## What I Learned

This project helped me understand the complete process of deploying a static website on AWS.

I learned how to take a locally developed HTML, CSS, and JavaScript application, upload it to an S3 bucket, configure static website hosting, set the required permissions, and make the application accessible through the web.

## Project Structure

```text
Planet-Weight-Calculator/
│
├── index.html
├── index.css
├── main.js
├── 6.png
│
├── screenshots/
│   ├── s3-bucket.png
│   ├── uploaded-files.png
│   ├── static-hosting.png
│   └── live-website.png
│
├── demo/
│   └── planet-weight-calculator-demo.mp4
│
└── README.md
```
