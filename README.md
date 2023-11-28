Chat Application Documentation
Introduction
Penguin Chat is a Node.js and React-based chat application that simulates conversations with a virtual character named Erdogan. The backend is developed using Express and MongoDB for handling API requests and data management, respectively. The frontend is built using React, providing a dynamic user interface for interactive chat.

Implementation Approach
Backend (Node.js & Express)
API Design: RESTful API endpoints are created for managing chat interactions, user state, and conversation history.
Database Schema: MongoDB models are defined for user states (UserState) and conversation logs (Conversation).
Chat Logic: Core functionality includes processing user inputs, revealing hints about Erdogan’s name, and storing conversation history.
Integration with External API: Utilizing Hugging Face's API for dynamic chat responses when Erdogan's name is discovered.
Frontend (React)
Chat UI: A responsive chat interface allowing users to send messages and view chat history.
State Management: React hooks (useState, useEffect) manage the state of the chat, including messages and the discovery of Erdogan's name.
API Communication: Axios is used for sending requests to the backend and handling responses.
Setup Process
Prerequisites
Node.js installed
MongoDB account and cluster
Hugging Face API key
Installation
Clone the Repository: git clone [repository-url]

Backend Setup:

Navigate to the backend directory: cd [backend-directory]
Install dependencies: npm install
Create a .env file in the root of the backend directory and add the following:
css
Copy code
MONGODB_URI=[Your MongoDB URI]
HUGGING_FACE_API_KEY=[Your Hugging Face API Key]
Start the server: npm start
Frontend Setup:

Navigate to the frontend directory: cd [frontend-directory]
Install dependencies: npm install
Start the React app: npm start
Running the Application
Access the application on localhost:3000 (or the configured port) in a web browser.
Interact with the chat interface.
Running the Demo
Start the Backend Server: Ensure the backend server is running.
Open the Frontend Application: In a web browser, navigate to the frontend URL.
Interact with the Chat: Type messages and observe the interactions with Erdogan.
Discover Erdogan’s Name: Follow hints or directly guess the name to change the chat behavior.
Troubleshooting
Database Connection Issues: Verify the MongoDB URI in the .env file.
API Key Problems: Ensure the Hugging Face API key is valid and correctly placed in the .env file.
Frontend-Backend Connectivity: Check if the backend server is running and accessible from the frontend.
Conclusion
Penguin Chat offers a unique interactive chat experience, showcasing the integration of modern web technologies. The application serves as a demonstrative project for understanding full-stack development with Node.js, Express, MongoDB, and React
