Recipe AI


Recipe AI is a lightweight web application that utilizes Google's Gemini 2.0 Flash model to generate culinary recipes on demand. The application allows users to input ingredients or dish names, generates a concise recipe via a Node.js backend, and provides a management interface to save, filter, and edit recipes.

Features
AI Generation: Integrates with Gemini 2.0 Flash for high-speed, relevant recipe creation.


Categorization: Ability to toggle between Vegetarian and Non-Vegetarian recipe types.


CRUD Operations: Users can add generated recipes to a local list, edit instructions manually, or delete entries.


Search & Filter: Real-time search functionality and category tabs (All, Veg, Non-Veg) to organize saved recipes.


Responsive UI: A custom CSS interface designed for both desktop and mobile use.


Tech Stack
Frontend: HTML5, CSS3 (Custom variables/Flexbox), Vanilla JavaScript.


Backend: Node.js, Express.


AI Integration: Google Generative AI (Gemini 2.0 Flash API).


Dependencies: node-fetch for API requests, cors for cross-origin resource sharing, and dotenv for environment variable management.


Installation
1. Clone the Repository:
git clone https://github.com/Shervin29/recipe-ai.git
cd recipe-ai

2. Configure Backend: 
Navigate to the root directory where server.js is located and install dependencies:
npm install


3. Set Up API Key
Create a .env file in the root directory:
API_KEY=your_google_gemini_api_key


4. Start the Server
Terminal: node server.js
The backend will run on http://localhost:3000.

5. Launch the Frontend:
Simply open index.html in any modern web browser. Ensure the backend server is running to enable the "Generate" functionality.

API Implementation Details:
The backend communicates with the Google Generative Language API using the following endpoint: https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent

A system prompt is automatically prepended to user input to ensure the AI remains focused on cooking and responds with a concise 4–5 line format.

License
This project is open source and available under the MIT License.
