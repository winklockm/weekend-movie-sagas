# Documentaries Now - a Weekend Saga Project

*Duration: 2 Day Sprint*

## Description

*"Truth is stranger than fiction."*

Documentaries are one of my greatest passions, which is why I spent my weekend writing code to showcase a few of my favorites - as well as my new Saga and advanced SQL skills!

The application I built pulls information from a database where the data is organized into three tables: one for movies, one for genres, and one junction table since the data have a many-to-many relationship.

On load, the home page triggers a Saga function, which triggers a GET request to the server and then the database using a SQL query asking for all movie data. That data is stored in a reducer for each movie poster and title to be displayed on the home page.

Using routes, clicking on a movie poster leads to a details page. This triggers another Saga function which triggers a GET request for both movie and genre data for the specific movie that was clicked. Movie and genre data for that movie are stored in separate reducers and displayed on the details page. From the details page, the user is able to click a button to return to the home page.

## Screen Shot

Home/List/Gallery Page:
![Home Page](/public/images/listpage.png)

Details Page:
![Details Page](/public/images/detailspage.png)

### Prerequisites

* Node.js
* React
* Redux
* Axios
* Express
* Body-Parser
* PG
* Redux-Saga
* Material UI
* Postico
* VS Code

## Installation

1. Fork and clone this repository to your local computer
2. Open the project folder using VSCode
3. In your database manager, create a database and tables using the data provided in the database.sql file
4. In terminal, `npm install`
5. In terminal, install all dependencies
6. In terminal, `npm run server`
7. In a second terminal window, `npm run client`

## Useage

1. Browse through the gallery of some great documentary films
2. When you find one that interests you, click the thumbnail image to see additional information
3. Click the return button to navigate back to the home page

## Built With
* SQL
* React
* Redux
* Saga
* CSS
* Material UI

## Acknowledgement

Many thanks to the following:

* Prime Digital Academy for helping make my software engineering dreams come true [https://www.primeacademy.io/]
* The L'Engle cohort for inspiration and support provided during the learning process
* Mark Borchardt for liking one of my tweets one time

## Support

Issues? Suggestions? Feedback? Have a great documentary recommendation? I'm all ears! Please email me at [maggie.whitlock@gmail.com]