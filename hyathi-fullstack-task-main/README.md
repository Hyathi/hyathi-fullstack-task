# Hyathi Technologies Full Stack Development Task - Virtual Pokemon Adoption App

## Objective

Your task is to create an application that simulates a virtual Pokemon adoption scenario. The app should allow users to:

- Register and log in.
- View available Pokemon for adoption (each Pokemon has different attributes like breed, age, health status, etc.).
- Adopt a Pokemon (Each user can adopt multiple Pokemon, but each Pokemon can be adopted only once).
- Once a Pokemon is adopted, the user can feed the Pokemon (each feeding increases Pokemon's health status).
- If a Pokemon isn't fed for a certain time (ex: 24 hours), its health status decreases.

Please note, the main goal of this task is to understand your mindset, approach, technical understanding, problem-solving skills, and logical reasoning capabilities rather than just delivering a complete project. Feel free to document your process and decisions in the code comments or in your commit messages.

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
- Set up the basic framework for displaying Pokemon:
   - Backend: Set up the endpoints and database schema for handling Pokemon data.
   - Frontend: Create a basic view for displaying all the Pokemon.

### Day 3

- Refine the Pokemon display view and add Pokemon adoption feature:
   - Backend: Create the appropriate endpoint and schema modifications to handle Pokemon adoption.
   - Frontend: Add a button or link to each Pokemon to allow users to adopt them.

### Day 4

- Implement the functionality for a user to feed their Pokemon and to update the health status:
   - Backend: Create the appropriate endpoint.
   - Frontend: Add a feed button to each Pokemon that the user has adopted.

### Day 5

- Implement a job (using something like node-cron) that decreases the health status of each Pokemon that hasn't been fed in the last 24 hours.
- Document all the endpoints using Postman and provide a collection of requests.
- After the task is completed please add iamuddeshya in your repo as a collaborator and email ua@hyathi.com to acknowledge you completed the task attaching the repo link in the email.

Good luck!
