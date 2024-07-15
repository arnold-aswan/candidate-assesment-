import React from "react";

const Instructions = () => (
  <div className="prose lg:prose-xl mx-auto my-10 p-6 bg-white shadow-md rounded-lg">
    <h1 className="text-3xl font-semibold mb-6 text-center">
      Assessment Instructions
    </h1>
    <p>
      Welcome to the assessment for the MERN Stack Developer position. This
      assessment aims to evaluate your proficiency in working with the MERN
      stack, including your skills in JavaScript, state management, database
      interactions, and UI/UX design. Please follow the detailed instructions
      below to complete your project.
    </p>

    <h2 className="text-2xl font-semibold mt-8 mb-4">Project Overview</h2>
    <p>
      The real-world take-home project for the MERN Stack Developer position at
      Simple Formations Limited involves creating a member management system web
      application using  Express.js, React, and
      Node.js). The project aims to test the candidate's skills in:
    </p>
    <ul className="list-disc list-inside ml-6">
      <li>
        <strong>Frontend Development:</strong> Building a user interface with
        React, demonstrating proficiency in UI/UX design.
      </li>
      <li>
        <strong>Backend Development:</strong> Setting up a server with Node.js
        and Express, showcasing the ability to handle server-side logic and
        database interactions.
      </li>
      <li>
        <strong>Database Management:</strong> Using MongoDB to manage and
        manipulate data, reflecting knowledge of database operations and schema
        design.
      </li>
      <li>
        <strong>State Management:</strong> Implementing global state management
        in the application, illustrating the ability to handle complex state
        interactions.
      </li>
    </ul>
    <p>
      Candidates are expected to complete the project within five days and
      submit their work via a public GitHub repository, along with a short Loom
      video explaining the project and how it complies with the given
      guidelines. This project helps assess the candidates' practical skills,
      problem-solving abilities, and overall fit within the team.
    </p>

    <h2 className="text-2xl font-semibold mt-8 mb-4">Setup</h2>
    <ol className="list-decimal list-inside ml-6">
      <li className="mb-4">
        <strong>Clone the Repositories:</strong> Start by cloning the backend
        and frontend repositories from GitHub. These repositories contain the
        boilerplate code you will use to build your project.
        <pre className="bg-gray-100 p-4 rounded-md">
          <code>{`git clone https://github.com/kipronorugut/candidate-assessment`}</code>
          <br />
        </pre>
      </li>
      <li className="mb-4">
        <strong>Install Dependencies:</strong> Navigate to the backend directory
        and install the necessary dependencies.
        <pre className="bg-gray-100 p-4 rounded-md">
          <code>{`cd mern-stack-backend-template`}</code>
          <br />
          <code>{`npm install`}</code>
        </pre>
        Then, navigate to the frontend directory and install its dependencies.
        <pre className="bg-gray-100 p-4 rounded-md">
          <code>{`cd ../mern-stack-frontend-template`}</code>
          <br />
          <code>{`npm install`}</code>
        </pre>
      </li>
      <li className="mb-4">
        <strong>Setup Environment Variables:</strong> Create a <code>.env</code>{" "}
        file in the backend directory and add the following environment
        variable:
        <pre className="bg-gray-100 p-4 rounded-md">
          <code>{`JWT_SECRET=your_jwt_secret`}</code>
        </pre>
        Replace <code>your_jwt_secret</code> with a secure secret key of your
        choice.
      </li>
      <li className="mb-4">
        <strong>Start the Server:</strong> Start the backend server.
        <pre className="bg-gray-100 p-4 rounded-md">
          <code>{`npm run dev`}</code>
        </pre>
        Next, start the frontend development server.
        <pre className="bg-gray-100 p-4 rounded-md">
          <code>{`cd ../mern-stack-frontend-template`}</code>
          <br />
          <code>{`npm start`}</code>
        </pre>
      </li>
    </ol>

    <h2 className="text-2xl font-semibold mt-8 mb-4">Tasks</h2>
    <ul className="list-disc list-inside ml-6">
      <li className="mb-4">
        <strong>User Authentication:</strong> Implement user registration and
        login functionality using JSON Web Tokens (JWT). Ensure the following
        endpoints are working:
        <pre className="bg-gray-100 p-4 rounded-md">
          <code>{`
            // Registration API
            POST /api/auth/register

            // Login API
            POST /api/auth/login
          `}</code>
        </pre>
      </li>
      <li className="mb-4">
        <strong>Member Management:</strong> Develop features to add new members
        and view a list of existing members. The member creation form should
        include:
        <ul className="list-disc list-inside ml-6">
          <li>First Name</li>
          <li>Middle Name</li>
          <li>Last Name</li>
          <li>ID Number</li>
          <li>Date of Birth</li>
          <li>Upload Photo</li>
        </ul>
        Implement the following endpoints:
        <pre className="bg-gray-100 p-4 rounded-md">
          <code>{`
            // Get All Members API
            GET /api/members

            // Create Member API
            POST /api/members
          `}</code>
        </pre>
      </li>
      <li className="mb-4">
        <strong>UI/UX Design:</strong> Use Tailwind CSS with IBM Carbon Design
        to style the application. Ensure the application has a clean, modern,
        and responsive interface.
        <ul className="list-disc list-inside ml-6">
          <li>Use IBM Plex Sans font for all text.</li>
          <li>
            Follow IBM Carbon Design guidelines for components and layout.
          </li>
        </ul>
      </li>
      <li className="mb-4">
        <strong>Global State Management:</strong> Use Context API to manage the
        application's state. Set up the global state to manage user
        authentication and member data.
        <pre className="bg-gray-100 p-4 rounded-md">
          <code>{`
            // Example Context API setup
            import React, { createContext, useContext, useReducer } from 'react';

            const AppContext = createContext();

            const appReducer = (state, action) => {
              switch (action.type) {
                case 'SET_USER':
                  return { ...state, user: action.payload };
                default:
                  return state;
              }
            };

            export const AppProvider = ({ children }) => {
              const [state, dispatch] = useReducer(appReducer, { user: null });

              return (
                <AppContext.Provider value={{ state, dispatch }}>
                  {children}
                </AppContext.Provider>
              );
            };

            export const useAppContext = () => useContext(AppContext);
          `}</code>
        </pre>
      </li>
      <li className="mb-4">
        <strong>Database:</strong> Use SQLite to store user data and members.
        Set up and initialize the database in the <code>database.js</code> file.
        <pre className="bg-gray-100 p-4 rounded-md">
          <code>{`
            const sqlite3 = require('sqlite3').verbose();
            const db = new sqlite3.Database(':memory:');

            db.serialize(() => {
              db.run(\`CREATE TABLE users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                username TEXT,
                password TEXT
              )\`);

              db.run(\`CREATE TABLE members (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                firstName TEXT,
                middleName TEXT,
                lastName TEXT,
                idNumber TEXT,
                dateOfBirth TEXT,
                photo BLOB
              )\`);
            });

            module.exports = db;
          `}</code>
        </pre>
      </li>
    </ul>

    <h2 className="text-2xl font-semibold mt-8 mb-4">Submission</h2>
    <p>Once you have completed the tasks, follow these steps for submission:</p>
    <ol className="list-decimal list-inside ml-6">
      <li className="mb-4">
        <strong>Push your code to a public GitHub repository.</strong> Ensure
        all your changes are committed and pushed to a public repository.
        <pre className="bg-gray-100 p-4 rounded-md">
          <code>{`
            git init
            git add .
            git commit -m "Initial commit"
            git remote add origin https://github.com/your-username/your-repository.git
            git push -u origin master
          `}</code>
        </pre>
      </li>
      <li className="mb-4">
        <strong>Create a video explaining your project.</strong> Record a video
        using Loom covering the following points:
        <ul className="list-disc list-inside ml-6">
          <li>Project overview</li>
          <li>Implemented features</li>
          <li>Challenges faced</li>
          <li>How you solved these challenges</li>
          <li>Any additional notes</li>
        </ul>
        Provide the Loom video link in the README file of your repository.
      </li>
      <li className="mb-4">
        <strong>Submit the repository link.</strong> Share the link to your
        GitHub repository and the Loom video with us via email.
      </li>
    </ol>

    <p>
      We look forward to reviewing your project and wish you the best of luck!
    </p>
  </div>
);

export default Instructions;
