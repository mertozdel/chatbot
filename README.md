Penguin Chat Application
Penguin Chat is an interactive chat application where users can converse with a virtual character named Erdogan. It's built using Node.js, Express, MongoDB for the backend, and React for the frontend.

Table of Contents
Introduction
Features
Technologies Used
Getting Started
Prerequisites
Installation
Usage
Running the Demo
Troubleshooting
Contributing
License
Contact
Introduction
The application simulates chat interactions in a playful and engaging manner. Users can discover the virtual character's name through interaction and hints.

Features
Interactive chat interface with a virtual character.
Dynamic conversation based on user inputs.
Name discovery feature with hints.
Conversation history tracking for each user.
Technologies Used
Backend: Node.js, Express, MongoDB, Mongoose
Frontend: React, Axios
Other: Hugging Face API, dotenv
Getting Started
Prerequisites
Node.js
MongoDB
Hugging Face API key
Installation
Clone the Repository:

bash
Copy code
git clone [repository-url]
Backend Setup:

Navigate to the backend directory and install dependencies:
bash
Copy code
cd [backend-directory]
npm install
Create a .env file in the root of the backend directory:
css
Copy code
MONGODB_URI=[Your MongoDB URI]
HUGGING_FACE_API_KEY=[Your Hugging Face API Key]
Start the server:
bash
Copy code
npm start
Frontend Setup:

Navigate to the frontend directory and install dependencies:
bash
Copy code
cd [frontend-directory]
npm install
Start the React app:
bash
Copy code
npm start
Usage
Access the application at localhost:3000 (or configured port) in your browser.
Begin chatting with the virtual character.
Running the Demo
After setting up both backend and frontend, use the chat interface to interact with Erdogan and discover his name.
Troubleshooting
Ensure MongoDB URI and Hugging Face API key are correctly set in the .env file.
Check if the backend server is running and accessible from the frontend.
