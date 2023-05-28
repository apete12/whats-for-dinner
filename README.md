
# What's for Dinner? 

### Abstract:
[//]: <> (Briefly describe what you built and its features. What problem is the app solving? How does this application solve that problem?)
This application is a product of the Whats for Dinner? project assigned in Mod1 of Front End Software Engineering & Design program. The app assists users in choosing a dish and putting a meal together. 

### Installation Instructions:
[//]: <> (What steps does a person have to take to get your app cloned down and running?)
This application allows users to select from choices 
of sides, mains, desserts, or a whole meal, and the 
application with randomly generate a recipe name 
according to the users choice. The application 
simply displays a recipe name, no recipes are shown. 

Users also have the option to clear their selection by selecting the clear button. In doing so, this clears the food types displayed on the screen as well as the radio buttons. 
the clear 
### Preview of App:
[//]: <> (Provide ONE gif or screenshot of your application - choose the "coolest" piece of functionality to show off.)

<img width="1428" alt="Screenshot 2023-05-28 at 6 39 49 PM" src="https://github.com/apete12/whats-for-dinner/assets/104571445/fbdf0500-715a-4a40-9933-3555d0f4a996">


### Context:
[//]: <> (Give some context for the project here. How long did you have to work on it? How far into the Turing program are you?)
This project was intended to be completed individually, it was assigned in the third week of module 1. Instructors assigned this project roughly 5 days before the due date. 


### Contributors:
[//]: <> (Who worked on this application? Link to their GitHubs.)
Alex Peterson - https://github.com/apete12

### Learning Goals:
[//]: <> (What were the learning goals of this project? What tech did you work with?)
The broad learning goals of this project were to facilitate the opportunity to build an application individually, while also analyzing the scope of my programming strengths and areas needing improvement. The structure of this project also allowed me to practice individualizine my programming skills. 

More specifically, I worked with HTML, CSS, and JavaScript to build this application. 



### Wins + Challenges:
[//]: <> (What are 2-3 wins you have from this project? What were some challenges you faced - and how did you get over them?)

- A win is that I finished all iterations of this project, in addition to adding an extra 'choose your own adventure' piece of functionality. I had originally chosen to add 'whole meal' functionality, allowing users to have the option to receive a randomly generated whole meal. However, in working through this option and testing it's functionality, I realized that I felt a clear button was vital to user experience. Not only to clear the suggested food items, but also have the radio buttons subsequently clear instead of needing to refresh the page. I am proud that I added these extra pieces of functionality, and also thought about optimizing user experience. 

- A challenge with this project was trying to incorporate a data model and sync it to the DOM. Originally, my javascript did not include a data model and I was purely manipulating the DOM to display the randomly generated food items. After meeting with a Rock and going through how a data model would be useful for this project, I was able to refactor my JavaScript to include a data model that would be updated prior to updating the DOM. An additional challenge was understanding whether my data model was then updated when using the clear button, and I determined that it currently is not being updated via the clear button. However, I plan to ask another mentor to take a look at my code and maybe give feedback in this area. 