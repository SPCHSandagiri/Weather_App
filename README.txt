Description:
A Node.js-based weather application that provides weather information based on the user’s location. It uses Express.js for handling routes, Handlebars (hbs) as the templating engine, and Axios to fetch geolocation and weather data from external APIs.

Features:
*Home Page: Allows users to input a location and get weather data.
*Weather API Integration: Fetches geolocation data using the OpenWeatherMap Geocoding API.
*Multiple Views: Handlebars templates for dynamic rendering (home, help, about, and weather pages).
*Reusable Navigation: Includes reusable navigation partial across different pages.

Technologies Used:
*Node.js
*Express.js: Server-side framework for handling routing.
*Handlebars (hbs): Templating engine for rendering HTML views.
*Axios: Promise-based HTTP client for making API calls.
*Nodemon: For automatic server restarts during development.
*OpenWeatherMap API: Used to fetch geolocation data.

Project Structure:
*src/: Contains the main server code (app.js).
*public/: Holds static assets like JavaScript and CSS files.
*template/: Handlebars templates for different views (home, help, about, weather).
*utils/: Utility files for API requests, such as geolocation logic (geo.js).

How to Run:
1. Clone the repository: git clone https://github.com/your-username/weather-app.git
2. Install dependencies: npm install
3. Run the application: npm start

API Configuration:
This project uses the OpenWeatherMap Geocoding API for fetching geolocation data. You need an API key from OpenWeatherMap to use the service.

* Sign up at OpenWeatherMap.
* Replace the API key in geo.js with your own key
** const url = 'https://api.openweathermap.org/geo/1.0/direct?q=' + location + '&limit=1&appid=YOUR_API_KEY'; **

Intended Users:
This project is ideal for developers or students who want to learn about working with APIs, using Handlebars for templating, and building a basic web app with Express.js.

Future Plans:
*Add weather data display for the fetched geolocation.
*Implement more detailed weather forecasting using the OpenWeatherMap Weather API.
*Improve the UI for mobile responsiveness.

License: ISC License


