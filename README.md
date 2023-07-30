This is a project made by Anyi Chen, Diana Hung, Hafeefa Sultan and Jianing Wei as part of the Brooklyn College Tech Talent Pipeline Program.

# What is Myth Maker?
 Myth Maker is an interactive fiction platform that allows creatives to build their own stories as games without any programming knowledge. Users can give their readers control over what happens in the story by offering them a set of decisions to progress through each story.

# The Data Structure
Each story is written by the creatives using our platform. Each story is made of events and each event is linked up to 3 branching choices. 

Myth Maker uses a linked list data structure to connect events(each event is treated as a node) within each story and to help the players traverse through the story they play in a legible narrative set by the creators.  The game ends when the player has reached an event with no choices(no connecting links).

# How to run Myth Maker: 
	!!!!!Paste the recorded video, and list the features in simple form(create story + play story)!!!!!

# Why did we make Myth Maker? 

The original idea was to create a tabletop roleplaying platform(namely Dungeons and Dragons) with the ability for users to not only set up an easy to navigate online chat room with various game functions but also the ability to write solo games for a wider audience to easily play during their leisure time. 
However, after discussing our starting point and considering the team’s time limitations, we came to the conclusion that our main goal is to create a platform that will enable creative minds to create interactive adventures and share their creations without much caveats. Most of the team are fans of the visual novel genre so we decided to emulate the format in how Myth Maker stories are presented.
# Challenges:
Making too many API calls to track a user’s play history and creations through their ID number as they navigate through the application

**Solution:** use the Redux Persist library to save user information from state to localStorage and rehydrate the information from localStorage back into state without making API calls to retrieve information.
# OAuth:
Open Authorization for Myth Maker is available through Google Services and the node Passport library


# Inspirations:
- _CCfolia_ - A well known virtual tabletop tool from japan for hosting online tabletop roleplay game sessions. This site not only provides individual chatroom and dice tools for communication, it also allows image and music uploads for the full game immersion.
- _Twine_ - An open-source interactive fiction tool that allows users to create and share interactive and non-linear stories without any coding knowledge.
- _Ren’Py_ - 
A famous visual novel engine that allow people to create their own visual novel using python script
Various rpg maker engines and visual novel games.

# Tech Stack:
### Our Backend:
- Express
- MongoDb 
- Mongoose
- Mongoose Autopopulate
- Connect MongoDb Sessions
- Passport

### Our Frontend: 
- React
- React-Type-animation 
- Redux
- Persist 
- Particles.js
- Axios
- Materials UI for pagination
- Bootstrap for navbar
- HTML
- CSS 
- JavaScript

### Deployed on:
Netlify and Vercel

