# UniEvent - University Event Management System

## Project Overview
UniEvent is a cloud-hosted university event management web application. It allows students to browse university events, view event details, and register for activities.

This project is designed for deployment on AWS using IAM, VPC, EC2, S3, and Elastic Load Balancing.

## Features
- Displays university events
- Fetches event data from a JSON/API source
- Shows event title, date, venue, description, and image
- Allows students to register for events
- Designed for scalable AWS deployment
- Supports fault tolerance using multiple EC2 instances behind a Load Balancer

## Technologies Used
- HTML
- CSS
- JavaScript
- JSON / Open API concept
- AWS EC2
- AWS S3
- AWS VPC
- AWS IAM
- AWS Elastic Load Balancer

## External Events API
For this project, event data is fetched using JavaScript `fetch()` from a structured JSON source. In a production system, this can be replaced with a public events API such as Ticketmaster Discovery API or Eventbrite API.

The API provides event-related data such as:
- Event title
- Event date
- Venue
- Description
- Event image/poster

## AWS Architecture
The UniEvent system will be deployed using the following architecture:

1. Users access the application through an Internet-facing Application Load Balancer.
2. The Load Balancer forwards traffic to multiple EC2 instances.
3. EC2 instances are placed inside private subnets for security.
4. Event images and uploaded media are stored securely in Amazon S3.
5. IAM roles are used to allow EC2 instances to access S3 securely.
6. The application remains available even if one EC2 instance fails.

## Fault Tolerance
The application runs on multiple EC2 instances in different private subnets. If one EC2 instance fails, the Application Load Balancer sends traffic to the healthy instance.

## Repository Contents
- `index.html` - Main webpage
- `style.css` - Webpage styling
- `script.js` - JavaScript for fetching and displaying events
- `events.json` - Sample event data
- `README.md` - Project documentation

## Deployment Steps
1. Create the webpage using HTML, CSS, and JavaScript.
2. Upload source code to GitHub.
3. Create AWS VPC with public and private subnets.
4. Create Internet Gateway and NAT Gateway.
5. Create S3 bucket for event images.
6. Create IAM role for EC2 access to S3.
7. Launch two EC2 instances in private subnets.
8. Install Apache web server on EC2.
9. Deploy website files from GitHub.
10. Create Target Group.
11. Create Application Load Balancer.
12. Test website using Load Balancer DNS.
13. Stop one EC2 instance and verify the website still works.