# English Learning Platform (LMS)

A simple English Learning Management System built with React, Vite, and Tailwind CSS.

## Features
- View course catalog
- Browse lessons within courses
- Read lesson content
- Take simple multiple-choice quizzes to test knowledge

## Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```

## AWS Free Tier Deployment Guide

This application is a static React single-page application (SPA) built with Vite, making it perfect for hosting on AWS using their Free Tier services.

You have two excellent options for hosting this on AWS for free:

### Option 1: AWS Amplify (Recommended - Easiest)

AWS Amplify offers a streamlined workflow for frontend web apps.

1. Create a [GitHub repository](https://github.com/new) and push this code to it.
2. Log in to the [AWS Management Console](https://console.aws.amazon.com/) and navigate to **AWS Amplify**.
3. Click **Get Started** under Amplify Hosting.
4. Select **GitHub** and authorize AWS to access your repositories.
5. Select the repository containing this project and the branch (e.g., `main`).
6. Amplify will automatically detect that it's a Vite project. The default build settings should look like this:
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: dist
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```
7. Click **Next**, review the details, and click **Save and deploy**.
8. Amplify will build and deploy your site, providing you with a free `amplifyapp.com` domain.

### Option 2: AWS S3 + CloudFront

You can also host the static files directly out of an S3 bucket and serve them via CloudFront.

1. **Build the project locally:**
   ```bash
   npm run build
   ```
   This will create a `dist` folder containing your static assets.

2. **Create an S3 Bucket:**
   - Go to the S3 console and create a new bucket (e.g., `my-english-lms-app`).
   - Leave "Block all public access" checked (we will use CloudFront to access it).

3. **Upload Files:**
   - Upload the contents of your local `dist` folder to the root of the S3 bucket.

4. **Create a CloudFront Distribution:**
   - Go to the CloudFront console and click **Create Distribution**.
   - **Origin domain:** Select your S3 bucket.
   - **Origin access:** Choose "Origin access control settings (recommended)" and create a new OAC.
   - **Viewer protocol policy:** Redirect HTTP to HTTPS.
   - **Default root object:** Enter `index.html`.
   - Click **Create Distribution**.

5. **Update S3 Bucket Policy:**
   - CloudFront will give you a bucket policy to copy. Go back to your S3 bucket > Permissions > Bucket Policy, and paste the policy to allow CloudFront to read the files.

6. **Wait for deployment & Access your site:**
   - Once the CloudFront distribution is deployed, you can access your site using the provided `.cloudfront.net` domain name.

*(Note: AWS Free Tier limits apply. S3 gives you 5GB of standard storage and 20,000 Get Requests per month. CloudFront gives you 1TB of data transfer out per month. This is more than enough for a small personal or portfolio project.)*
