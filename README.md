# Hyathi Full Stack Developer Test - Virtual Pet Adoption App

## Objective

Your task is to create an application that simulates a virtual pet adoption scenario. The app should allow users to:

- Register and log in.
- View available pets for adoption (each pet has different attributes like breed, age, health status, etc.).
- Adopt a pet (Each user can adopt multiple pets, but each pet can be adopted only once).
- Once a pet is adopted, the user can feed the pet (each feeding increases pet's health status).
- If a pet isn't fed for a certain time (ex: 24 hours), its health status decreases.

We will provide you with a basic code skeleton for both the frontend and the backend, which has a few different bugs that prevent the application from running. Your first task will be to identify and resolve these bugs to get the application running.

## Tech Stack

- Backend: Node.js, Express, and MongoDB
- Frontend: React
- We prefer Typescript but Javascript can be used as well.

## Instructions

1. Please fork the provided repository and clone it to your local machine. You'll complete your work on your own forked repository.

2. We encourage you to make regular, meaningful commits to your repository. This isn't about making one large commit at the end of the project. Instead, we want to see a progression of commits that reflect your development process.

While we've provided a 5-day breakdown, feel free to complete the project early or follow your own process if you're more comfortable with that.

## 5-Day Project Breakdown

### Day 1

- Identify and resolve the bugs in the provided skeleton code to get the application running.
- Develop the User Registration functionality:
   - Backend: Create the appropriate endpoint and database schema for user registration.
   - Frontend: Use React to create the registration form and handle the form submission.

### Day 2

- Develop the User Login functionality:
   - Backend: Create the appropriate endpoint for user authentication.
   - Frontend: Create the login form and handle the form submission.
- Set up the basic framework for displaying pets:
   - Backend: Set up the endpoints and database schema for handling pet data.
   - Frontend: Create a basic view for displaying all the pets.

### Day 3

- Refine the pet display view and add pet adoption feature:
   - Backend: Create the appropriate endpoint and schema modifications to handle pet adoption.
   - Frontend: Add a button or link to each pet to allow users to adopt them.

### Day 4

- Implement the functionality for a user to feed their pets and to update the health status:
   - Backend: Create the appropriate endpoint.
   - Frontend: Add a feed button to each pet that the user has adopted.

### Day 5

- Implement a job (using something like node-cron) that decreases the health status of each pet that hasn't been fed in the last 24 hours.
- Document all the endpoints using Postman and provide a collection of requests.

Please note that while we would love to see a complete project, our main focus is on understanding your approach, problem-solving skills, technical thinking, and logical reasoning. We're interested in seeing how you tackle problems and work through challenges, so feel free to document your process and decisions in the code comments or in your commit messages.

Good luck!
