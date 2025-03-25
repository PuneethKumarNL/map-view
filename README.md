# Geospatial Web Application with Secure Authentication

This project is a web application developed using vite.js for the frontend and Node.js with Express.js for the backend. It integrates an interactive map using the `react-leaflet` library  and implements secure user authentication using JSON Web Tokens (JWT).


## Features

-   **Secure Authentication:** JWT-based authentication with HTTP-only cookies for secure token management.
-   **Interactive Map:** Displays the map of India using `react-leaflet` and OpenStreetMap.
-   **Dashboard:** Displays card components with unique IDs.
-   **Map View:** Opens the map view on card click, with zoom in/out functionality.
-   **Responsive UI:** User interface is designed to be visually appealing and responsive.
-   **API Endpoints:**
    -   `/api/login`: Authenticates users and issues JWT tokens.
    -   `/api/dashboard`: Returns dashboard data (protected).
    -   `/api/map`: Returns map view configuration (protected).
-   **Error Handling:** Displays "User not logged in" message for unauthorized access.

## Technologies Used

-   **Frontend:**
    -   vite.js
    -   React
    -   `react-map-gl`
    -   `react-map-gl-geocoder`
    -   `fetch` - `axios`
    -   `cookies-next`
    -   `nodemailer`
    -   `tailwind`
-   **Backend:**
    -   Node.js
    -   Express.js
    -   `jsonwebtoken`
    -   `bcryptjs`
    -   `dotenv`
    -   `cookie-parser`

## Setup Instructions

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/PuneethKumarNL/map-view]
    cd [map-view]
    ```

2.  **Install backend dependencies:**

    ```bash
    cd server
    npm install
    npm start 
    ```

3.  **Install frontend dependencies:**

    ```bash
    npm install # or yarn install
    npm start
    ```



4.  **Open the application in your browser:**

    ```
    http://localhost:3000
    ```

## API Endpoints

-   **POST `/api/login`:**
    -   Accepts `username` and `password` in the request body.
    -   Returns a JWT token as an HTTP-only cookie on successful login.
    -   Returns an error message on failed login.

-   **GET `/api/dashboard`:**
    -   Protected endpoint. Requires a valid JWT token.
    -   Returns an array of card objects.
    -   Returns "User not logged in" message on unauthorized access.

-   **GET `/api/map`:**
    -   Protected endpoint. Requires a valid JWT token.
    -   Returns map configuration data (initial coordinates and zoom level).
    -   Returns "User not logged in" message on unauthorized access.


