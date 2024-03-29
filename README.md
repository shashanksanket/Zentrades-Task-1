### The Problem Statement

Create an application to parse the JSON from the API mentioned below. https://s3.amazonaws.com/open-to-cors/assignment.json
The JSON file contains 1000 records of products. Each product has the following 4 attributes
- Subcategory
- Title
- Price
- Popularity

Task:
- Fetch the JSON file programmatically and store the data in the data structure of your choice.
- Display the data in the presentation of your choice with Title, Price ordered based on the descending popularity.

Deliverables:
- Hosting URL on Heroku / Github pages
- Github repository link to your solution.
- Time taken to complete this

## Solution 

# Product Display App

This React application fetches data from an external API, displaying a list of products categorized by subcategories. The products are ordered based on descending popularity and paginated for user convenience.

##Live Link:
https://shashanksanket.github.io/Zentrades-Task-1/

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/shashanksanket/Zentrades-Task-1.git
   ```

2. Navigate to the project directory:

    ```
    cd task1
    ```
3. Install dependencies:

    ```
    npm install
    ```
4. Run the application:

    ```
    npm start
    ```
Visit http://localhost:3000 in your web browser to view the app.

## Features
**Category Filtering:** Products are categorized, and you can filter products by clicking on a specific category.

**Pagination:** Products are paginated to improve user experience, allowing you to navigate through the product list easily.

**Sorting:** Products are initially sorted based on descending popularity.

## Implementation Details
- Data is fetched from the API using the fetch function.

- Categories are dynamically extracted from the product data.

- Products are sorted based on descending popularity.

- The app displays a paginated list of products with details such as subcategory, title, price, and popularity.

## Directory Structure
- src/App.js: Main component containing the application logic and rendering.

- src/App.css: Stylesheet for the application.

- Used Tailwind Css for styles

##Images 
<img width="1440" alt="Screenshot 2024-01-10 at 4 15 20 AM" src="https://github.com/shashanksanket/Zentrades-Task-1/assets/40575030/08670cec-9372
-4e5a-a990-f04daf3ada1b">
![Uploading Screenshot 2024-01-10 at 4.15.50 AM.png…]()

