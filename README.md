An embedded screenshot of the app
Explanations of the technologies used
A couple paragraphs about the general approach you took
Installation instructions for any dependencies
Link to your user stories – who are your users, what do they want, and why?
Link to your wireframes – sketches of major views / interfaces in your application
Link to your pitch deck – documentation of your wireframes, user stories, and proposed architecture
Descriptions of any unsolved problems or major hurdles you had to overcome

## Project 4 - Tacos 4 You

I created a taco finder that will find a taco restaurant that is within 1.25 miles of where you are located that is rated a 4 or higher on Yelp. You will be able to sign in and favorite a taco as well as see what others are favoriting.


## Photos of my App

![Alt Text](../landingpage.png)

## ERD

![Alt Text](https://github.com/jonrtroy/forum-app/blob/master/forum_ERD.png)


## User Stories
1. A user should be able to create their own topic for discussion.
2. A user should be able to like a topic.
3. A user should be able to click on a topic.
4. A user should be able to commment on a topic.
5. A user should be able to like a comment.
6. A user should go back to the home page from either the new page or show page.
7. A user should be able to see how many likes a topic has.
8. A user should be able to see how many comments a topic has.

## Modules

1. express - used to run node.js.
2. ejs - used for generating HTML with JavaScript.
3. method-override - used to create the likes since it's a PUT method.
4. morgan - terminal logger.
5. path - used to join the public folder.
6. pg-promise - used to link the database.
7. body-parser - this allows us to parse all bodies to the HTML

## Instructions

1. You will need to git clone from Github my project.
2. Once you have that, you will need to create a database named forum_app_db" in psql.
3. Then go into the root folder of the project and type in psql -d forum_app_db -f migrations/migrations.sql
4. Now that you created the database and the tables, you can now go into your localhost/3000/topic to run the project while nodemon is runnings.
