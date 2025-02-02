# Simple Card List
This is a simple web application that displays a list of products in card format. Users can view product details and delete products. The application consists of a React frontend and a Node.js/Express backend.

## Tech Stack
- **Frontend**: React, Material-UI, Axios
- **Backend**: Node.js, Express.js

## Features
- Displays a list of products in card format using Material-UI.
- Each card includes:
  - Product name
  - Product description
  - Product price
  - Product image
- Users can delete a product by clicking the delete button.
- Fetches product data from the backend.
- Data persists after a page refresh.

## How to Run the Project
1. ### Clone the Repository
   `git clone https://github.com/nyggirl/simple-card-list.git`<br>
   `cd simple-card-list`
2. ### Run the Backend
   `cd backend`<br>
   `npm install`<br>
   `npm start`<br>
   The backend runs on http://localhost:3001/api/products .
3. ### Run the Frontend
   Open a new terminal<br>
   `cd simple-card-list/frontend`<br>
   `npm install`<br>
   `npm run dev`<br>
   The frontend runs on http://localhost:3000 .

## Backend Endpoints
- GET `/api/products` → Fetch the list of products.
- DELETE `/api/products/:id` → Delete a product by its ID.

## Screenshots
![Simple Card List](https://i.imgur.com/BeWBerN.png)

## License
This project is licensed under the MIT License.
