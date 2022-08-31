## Project summary  
Create short quizes with a set of answers. Submit them. Log in and take the quizes, getting instant results.

![quiz app register demo gif](https://github.com/d-username/Quiz-App/blob/main/public/images/quiz_app_register_demo.gif)
![quiz app main demo gif](https://github.com/d-username/Quiz-App/blob/main/public/images/quiz_app_main_demo.gif)

## How to run it/set up locally  
- for this app you will need to clone 2 repositories to your local machine:
client: https://github.com/d-username/Quiz-App - this repo we are in.
server: https://github.com/d-username/Quiz-App-Server

- to start the frontend React app, run ``npm start``
- open ``http://localhost:3000`` to view it in your browser  
- to start the server, run ``cd prisma-api-crud`` and ``npm run dev``
- the server will run on ``http://localhost:3500``


## What technology I used  
- HTML
- CSS
- React
- JavaScript
- Node.JS
- Express
- PostgreSQL
- Prisma ORM
- Designed ERD for constructing a relational database
- Applied React Router to navigate UI


## Feature list  
- when the app is opened in the browser the user is navigated to ``/login``
- user can register (email must be unique by Prisma) and login
- user gets notification when registration is successful
- create quiz --> add questions and answers, there is no limit on number of answers added to each question
- both questions and answers can be deleted
- using the checkboxes, chose the correct answer
- submit the quiz --> quizes are stored in the cloud service ElephantSQL 
- take quizes --> user can choose from the Quiz List
- use radio buttons to mark the answers and click Submit
- get instant answer of the correct answer count
- any quiz can be deleted
- user can log out


## Possible additional features  
- no need to sign in every time the user visits the page - the user will be automatically logged in
- before the student takes the test → will get a quick overview and instructions on what to expect
- can see the list of users registered, and delete them
- can see a simple graph or chart visualising the results of the tests taken
- able to filter users by their results

<br />
