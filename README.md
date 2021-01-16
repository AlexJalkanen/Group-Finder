# Group-Finder
Easily find and join groups!
Created for EECS 440 at University of Michigan
www.group-finder.com

# Easily Form Groups
Group-Finder allows students to ability to register groups (partial or full), and for students without groups to join prexisting groups. Being a fully remote course, it can be difficult for students to find groupmates and causes unnecessary stress. With the ability to form groups with a click of a button, students can be more successful in their course.

# Running Group-Finder
Group-Finder is broken up into two halves - front and back end.

## Frontend
The frontend of the application was developed using Vue Js with Axios to fetch calls to the API. To serve the application, any package manager for Node.Js will work.

### Deploying Frontend
Install dependencies with ```yarn install```
Run locally with ```yarn serve```
To create build distribution, run ```yarn build```

By default, the frontend uses product end points. Note that any changes made locally WILL modify the production backend database.

The build files are served from an Amazon S3 bucket, using CloudFlare as a CDN to deliver the content. AWS certificate is used for HTTPS.

## Backend
The backend server is written with Node JS with Express. It is deployed on Amazon Elastic Beanstalk to handle servers and load balancers, and uses DynamoDB as the database. 

To deploy to Amazon EBS, zip the contents of the backend folder, ensuring app.js is on the root level when unzipped (ie. not in a backend folder). Upload the zip to Amazon EBS to handle deployment and load balancers automatically. 

