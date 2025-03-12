Tech Quiz Application

A quiz application built with the MERN stack (MongoDB, Express, React, Node.js) that lets users test their knowledge with multiple-choice questions. This project includes both component and end-to-end testing with Cypress.

Project Overview

The Tech Quiz app randomly selects questions about programming and technology from a MongoDB database. Users can:
- Start a new quiz
- Answer multiple-choice questions
- See their score at the end
- Take a new quiz after completion

Installation

To set up this project locally:

1. Clone the repository
  git clone https://github.com/Matty330/Tech-Quiz.git
  cd Tech-Quiz

2. Install dependencies
  npm install
  cd server && npm install
  cd ../client && npm install
  cd ..

3. Configure environment variables
  - Rename .env.EXAMPLE to .env in the server directory

4. Seed the database
  npm run seed

5. Start the development server
  npm run start:dev

Testing

I implemented Cypress for both component and end-to-end testing.

Component Testing

Component tests check the Quiz component in isolation:
- Verifies the start button renders correctly
- Tests that quiz questions load when clicking start
- Ensures that answering questions works properly
- Confirms the score screen appears after completion

To run component tests:
npm run test:component

End-to-End Testing

E2E tests verify the full user flow:
- App loads successfully
- User can start a quiz
- Questions appear and can be answered
- Final score displays correctly
- User can restart with a new quiz

To run E2E tests:
npm run test:e2e

Run All Tests
npm run test

Project Structure

- /client - React frontend
- /server - Express backend with MongoDB
- /cypress - Cypress test files
 - /component - Component tests
 - /e2e - End-to-end tests
 - /fixtures - Test data
 - /support - Support files

Technologies Used

- MongoDB for database
- Express.js for server
- React for frontend
- Node.js runtime
- Bootstrap for styling
- Cypress for testing

Challenges and Solutions

One challenge I faced was getting the E2E tests to find elements on the page. The issue was that the server wasn't properly serving static files in the development environment. I fixed this by modifying the server.ts file to serve static files in both development and production modes.

Another challenge was timing issues with React hydration. I solved this by adding appropriate waits and timeouts in the Cypress tests.

Video Demonstration

Here's a video walkthrough of the application and testing:
[Tech Quiz Demo Video](https://youtu.be/your-video-id)

Repository

https://github.com/Matty330/Tech-Quiz.git