## Getting Started

### Overview

The app is built using a react/redux combo. I'm using webpack to manage compiling of the JavaScript and Sass and to bundle everything together. SASS modules are imported into the relevant components. I'm using fetch-jsonp to fetch the data from the API. 

### `npm install`

Installs all dependancies and dev dependancies.

### `npm start`

Runs the app in development mode.<br>
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will not reload if you make edits.<br>
You will see the build errors and warnings in the terminal.


## Exercise Directions

For this exercise, you will build a small web application for Meetup to demonstrate your web engineering expertise.

We do not expect you to spend any more than three hours on this exercise. While you may take more time if you like, stopping after three hours will not be held against you. To better understand what we are looking for, see Evaluation below.

 

### Specification

We would like for you to build an interface which lets a user search for nearby Meetup groups using our public API. The search results should include specific information about each group. Clicking on a group’s name should take you to the group’s page on Meetup.com.

The page should include two sections: a search form and the search results. The layout of this page is up to you, but the page should be responsive enough so that it is functional on both a mobile device as well as a desktop web browser.

(You will not be judged negatively based on your level of design skill. However, there’s nothing wrong with paying some attention to our branding and aesthetics!)

 

### Search Form Requirements:

The search form should have two inputs: an input for your search string, and an input for the user to enter a zip code (which is optional). The entire page should not reload when a search is performed. The request should only hit the API if the user input is valid.


Use the /find/groups v3 endpoint to search for results. All API requests should use JSONP. 


If you already have a Meetup account, your API key can be located here:

https://secure.meetup.com/meetup_api/key/

 

Otherwise, you may use this API key:

6752511f3291b2b182ee4d2ef312

 

## Search Results Requirements:

Each search result should include:

Name
Location
Description
Member Count (use who in the response for bonus points!)
Photo (if available)
Next Event (if one is scheduled)
 
Clicking on the name of the group should take you to the group’s page on meetup.com.

If you find yourself with extra time, for bonus points, implement a solution so the user can fetch the next page of search results for their query. This can be a “Load More” button, an infinite scroll, pagination, or another method of your choice.


## Evaluation

This exercise is designed to showcase your engineering expertise to us on your own time, without all the pressures and restrictions of a live coding interview environment. We understand that you have a finite amount of time to complete this exercise, and our expectations are adjusted accordingly.

Some (but not all) of the questions we will ask of your solution:

Do you have a modern understanding of how to use core web technologies (HTML, CSS, and JavaScript) in a web application?
Were you able to interact with our API using JSONP? How much of the code would we be able to re-use if we wanted to hit a different endpoint?
How difficult would it be for an engineer on our team to inherit, understand, and continue to work on this code base?
How maintainable is your solution? Is the JavaScript written in a unit testable way?
 

We may follow-up with more questions, so be prepared to discuss how you would continue to maintain and build atop your submission.

We will review your submission in the latest production version of Google Chrome.
 
## Submission

Bundle your complete solution into a compressed (.zip) file. Please include a README.md file with a high level overview of your submission, notes, as well as any other information we may need in order to build or run your web application.

Please do not share the contents of this coding exercise with anyone, and do not post this assignment or your solution on any public facing sites or repositories.


Please feel free to reach out directly if you have any further questions. Otherwise, the team looks forward to receiving your submission!

Warmest regards,
Kristin

 

Please submit here: http://app.greenhouse.io/tests/9cf884857d70d2ceead9dd4d2c8c3685

