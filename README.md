 <p align="center">
<a href="https://mythmakers.vercel.app">Deployed Site</a>
    ·
    <a href="https://github.com/anyichen212/Mythmaker_BE">Back End Repo</a>
    ·
    <a href="https://github.com/dhungwt/mythmaker_frontend/">Front End Repo</a>
<img src = "https://github.com/dhungwt/mythmaker_frontend/blob/main/src/pages/assets/MMlogo.png?raw=true">
   <br /> 
    This is a project made by Anyi Chen, Diana Hung, Hafeefa Sultan and Jianing Wei as part of the Brooklyn College Tech Talent Pipeline Program.
    <br />
    </p>

# What is Myth Maker?
 Myth Maker is an interactive fiction platform that allows creatives to build their own stories as games without any programming knowledge. Users can give their readers control over what happens in the story by offering them a set of decisions to progress through each story.

# The Data Structure
Each story is written by the creatives using our platform. Each story is made of events and each event is linked up to 3 branching choices. 
 ### Linked List
- Myth Maker uses a linked list data structure to connect events(each event is treated as a node) within each story and to help the players traverse through the story they play in a legible narrative set by the creators.  The game ends when the player has reached an event with no choices(no connecting links).

### Map
- MythMaker's History Log function requires fetching from the list of events available and appending them to an array of events to be displayed. To accomplish this as efficiently as possible, we use the map algorithm by converting the array of events to a key-value pair object with their unique id as key and their data as the value. This approach helped us avoid iterating through the large set of array data every time we need to search for a new event.

# Features: 
	Video Tour Available here: https://youtu.be/_NJLoq9GUIU
### Authorization
- Local login
- OAuth through Google Services

### About Page
- Documentation with screenshots to guide users through how to use Myth Maker

### Create Story
 Allows user to create a story and publish to the Internet without any programming knowledge
-  Create a set of events that will form into a story
-  Ability to offer up to three clickable branching options that will lead to different story endings
-  Add and edit a cast characters specific to their story

### Play Story
 Allows user to experience a story they or another user created
- History Log displays all text from past events the user has experienced in the story
- Dialog Box types out the current event and displays the name of the associated character
- The user can also speed through the typing animation of the dialog box to immediately display the entire body of the event text and the choices available to them
- Options Panel to display a set of choices that will link to the next event
- Save button saves the story progress of the user 
- Clear button will delete the user's progress in a story and allow them to restart the game from beginning
- Back button will take the user back to their home page
  
# Why did we make Myth Maker? 

The original idea was to create a tabletop roleplaying platform(namely Dungeons and Dragons) with the ability for users to not only set up an easy to navigate online chat room with various game functions but also the ability to write solo games for a wider audience to easily play during their leisure time. 
<p></p>
However, after discussing our starting point and considering the team’s time limitations, we came to the conclusion that our main goal is to create a platform that will enable creative minds to create interactive adventures and share their creations without much caveats. Most of the team are fans of the visual novel genre so we decided to emulate the format in how Myth Maker stories are presented.

# Challenges:
- Making too many API calls to track a user’s play history and creations through their ID number as they navigate through the application

- **Solution:** use the Redux Persist library to save user information from state to localStorage and rehydrate the information from localStorage back into state without making API calls to retrieve information.

- How to present the structure of branching events that is comprehensible to everyday users

- **Solution:** Though far from perfect, we allow users to add up to three branches in the Edit Event page to represent connection. Instead of allowing users to add unlimited event options, we limited options to only three per event to prevent overwhelming users. The Create Story function was broken down into as many small components as possible (such as Title, Character Selection dropdown menu, Story Events, etc) and CSS was heavily utilized to enhance the clairty of interfaces to make the creation process as easy to understand as possible.

# Inspirations:
- _CCfolia_ - A well known virtual tabletop tool from japan for hosting online tabletop roleplay game sessions. This site not only provides individual chatroom and dice tools for communication, it also allows image and music uploads for the full game immersion.
- _Twine_ - An open-source interactive fiction tool that allows users to create and share interactive and non-linear stories without any coding knowledge.
- _Ren’Py_ - 
A famous visual novel engine that allow people to create their own visual novel using python script
Various rpg maker engines and visual novel games.

# Built With:
### Our Backend:
- Connect MongoDb Sessions
- Express
- Mongoose
- Mongoose Autopopulate
- MongoDb
- Passport

### Our Frontend: 
- Axios
- Bootstrap for navbar
- CSS
- HTML
- JavaScript
- Materials UI for pagination
- Particles.js
- Persist
- React
- React-Type-animation
- Redux

### Deployed on:
- Netlify
-  Vercel

