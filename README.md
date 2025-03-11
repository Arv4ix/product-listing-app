# Product Listing Application

This web application displays a paginated list of products fetched from the [DummyJSON API](https://dummyjson.com/docs/products), allowing users to view detailed information about each product.

## Features

* **Product Listing:**
  * Displays a list of products with pagination (10 products per page).
  * Clickable product images and titles that navigate to the product details page.
* **Product Details:**
  * Shows detailed information about a selected product.
  * Includes an image gallery to display all product images.
  * "Back to Product List" button that returns the user to the correct pagination number.
* **Responsive Design:**
  * Adapts to various screen sizes.
* **Data Fetching:**
  * Fetches data from the DummyJSON API.
* **Routing:**
  * Uses React Router DOM for client-side routing.

## Technologies Used

* **React:** JavaScript library for building user interfaces.
* **React Router DOM:** For handling routing and navigation.
* **Fetch API:** For fetching data from DummyJSON API.
* **Vite:** Build tool and development server.
* **CSS:** For styling the application.
* **TypeScript:** For static typing.

## Getting Started

1. **Clone the repository:**

    ```bash
    git clone [repository URL pending]
    ```

2. **Navigate to the project directory:**

    ```bash
    cd [project directory pending]
    ```

3. **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

4. **Start the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    ```

5. **Open the application in your browser:**

  * The application should be running at `http://localhost:5173/` (or the port Vite specifies).

## Build

To build the production version of the application:

```bash
npm run build
# or
yarn build
```
The built files will be located in in the dist directory.

## Deployment

To deploy the application, you can use platforms like:

* **Netlify:** Drag and drop the dist folder to deploy.
* **Vercel:** Connect your Git repository to deploy.
* **GitHub Pages:** Deploy from the dist folder.

## Project Structure

```
product-app/
 |--public/
 |--src/
 |  |--components/
 |  |  |--ProductList.tsx
 |  |  |--ProductItem.tsx
 |  |  |--ProductDetails.tsx
 |  |  |--Pagination.tsx
 |  |  |--ImageGallery.tsx
 |  |--App.tsx
 |  |--main.tsx
 |  |--index.css
 |--index.html
 |--package.json
 |--vite.config.ts
 |--README.md
 ```

 ## DummyJSON API

 This application uses the [DummyJSON API](https://dummyjson.com/docs/products) to fetch product data.

 ## Author

 * **Created by:** *Arvis Meijers*
 * **Email:** [meijersArvis@gmail.com](meijersarvis@gmail.com)
 * **LinkedIn:** [Arvis](https://www.linkedin.com/in/arvis-meijers-9b10b0285/)
 * **GitHub:** [Arvis](https://github.com/Arv4ix)

 ## License

 This project is intended for assessment purposes only. All rights reserved. No part of this project may be reproduced, distributed, or modified without explicit permission from the author.
