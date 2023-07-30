import React from "react";
import AboutNavBar from "../components/About Page Component/AboutNavBar";
import AboutMajorSection from "../components/About Page Component/AboutMajorSection";
import createstory from "../pages/assets/createstory.png";
import playhistory from "../pages/assets/playhistory.png";
import storiescreated from "../pages/assets/storiescreated.png";
import title from "../pages/assets/title.png";
import selectyourcharacter from "../pages/assets/selectyourcharacter.png";
import currentevent from "../pages/assets/currenevent.png";
import savedelete from "../pages/assets/saveanddelete.png";
import eventnametext from "../pages/assets/eventnameandtext.png";
import optionnametext from "../pages/assets/optionnameandtext.png";
import editevent from "../pages/assets/edit event.png";
import search from "../pages/assets/search.png";
import storyname from "../pages/assets/storyname.png";
import makechoice from "../pages/assets/makeachoice.png";
import narrate from "../pages/assets/narrate.png";
import historylog from "../pages/assets/historylog.png";
import saveclear from "../pages/assets/save and clear.png";
import back from "../pages/assets/back.png";
import stories from "../pages/assets/stories.png";
import home from "../pages/assets/home.png";
import homepage from "../pages/assets/home page.png";
import login from "../pages/assets/login and sign up.png";
import "./AboutCss.css";
import ParticleBackground from "../components/Particles/ParticleBackground";
import ScrollButton from "../components/ScrollButton/ScrollButton";

import MMlogo from "../pages/assets/MMlogo.png"
import BrowseStory from "../pages/assets/screenshots/BrowseStory.png";
import ExampleStoryPage from "../pages/assets/screenshots/ExampleStoryPage.png";
import HistoryLog from "../pages/assets/screenshots/HistoryLog.png";
import SaveGameButton from "../pages/assets/screenshots/SaveGameButton.png";
import ClearGameButton from "../pages/assets/screenshots/ClearGameButton.png";
import EndScreenButton from "../pages/assets/screenshots/EndScreenButton.png";
import EndScreen from "../pages/assets/screenshots/EndScreen.png";
import CreateStoryButton from "../pages/assets/screenshots/CreateStoryButton.png"
import NewStoryOnHomePage from "../pages/assets/screenshots/NewStoryOnHomePage.png"
import EditPageTitle from "../pages/assets/screenshots/EditPageTitle.png"
import CharacterCast from "../pages/assets/screenshots/CharacterCast.png"
import CharacterCastAdd from "../pages/assets/screenshots/CharacterCast_Add.png"
import CharacterCastAddName from "../pages/assets/screenshots/CharacterCast_AddName.png"
import CharacterCastSubmit from "../pages/assets/screenshots/CharacterCast_Submit.png"
import CharacterCastSelect from "../pages/assets/screenshots/CharacterCast_Select.png"
import CharacterCastAfterSelect from "../pages/assets/screenshots/CharacterCast_AfterSelect.png"
import CharacterCastAfterEdit from "../pages/assets/screenshots/CharacterCast_AfterEdit.png"




//main means bigger boxes

const AboutPage = () => {
    const majorSectionsData = {
        "How To Play A Story?": [
            {
                id: "section1",
                imagePath: BrowseStory,
                text: "Each Game is also an interactive story written by another user. Anyone, register or not can browse and play these stories written by the talented creatives who share their adventures with us. \n\n Click on a Story of choice to start!",
                main: true
            },
            {
                id: "section2",
                imagePath: ExampleStoryPage,
                text: "The narrative of the Story will type itself out in the dialogue box here. When the typing finish, a set of decisions will pop up asking you the player to choose the direction of this Story. \n\n To speed up this process, click on the dialogue box!",
                main: true
            },
            {
                id: "section3",
                imagePath: HistoryLog,
                text: "As the player progresses into the Story, every previous section of text (that has appeared in the dialogue box) will be added to the History Log for the player to refresh on what has happened in the story so far.",
                main: true,
            },
            {
                id: "section4",
                imagePath: SaveGameButton,
                title: "Save Game Button",
                text: "Click the save game button to save the progress! When the player comes back next time, they’re back at exactly where they last left off from. \n\n Save only works locally, on the same device.",
                main: false,
            },
            {
                id: "section5",
                imagePath: ClearGameButton,
                title: "Clear Game Button",
                text: "Click the clear game button to clear the save data AND restart from the beginning.",
                main: false,
            },
            {
                id: "section6",
                imagePath: EndScreenButton,
                imagePath2: EndScreen,
                title: "End Screen",
                text: "When the ending choice appears and was click. Congratulations, You’ve found the first ending of this story! \n\n Beware! When you click that ‘End’ choice, your save progress will also be clear.",
                main: true,
            },

        ],
        "Create A New Story": [
            {
                id: "section1",
                imagePath: CreateStoryButton,
                text: "To start creating a new Story, head to Homepage(only available to login users) and click the ‘Create A New Story’ button. The user will be redirected to the 'Edit Story Page’, where they can edit the newly created story. \n\nOnly registered users can create a story.",
                main: true
            },
            {
                id: "section2",
                imagePath: NewStoryOnHomePage,
                text: "Once ‘Create A New Story’ is clicked, a new Story will be automatically created and can be found on the bottom of the user’s homepage.",
                main: true
            },
            {
                id: "section3",
                imagePath: EditPageTitle,
                text: "Now that you're on the 'Edit Story' page, give the Story a desire title!",
                main: true
            },

        ],
        "Edit Your Character Cast": [
            {
                id: "section1",
                imagePath: CharacterCast,
                text: "This is an organization section for the Story Characters.\nHere the user can add/edit/delete the Characters of their Story to easily apply them with each associated Event later on.",
                main: true
            },
            {
                id: "section2",
                title: "Add Character",
                imagePath: CharacterCastAdd,
                text: "Click 'Add Character' button to start adding a new Character.",
                main: false
            },
            {
                id: "section3",
                title: "Name The New Character",
                imagePath: CharacterCastAddName, 
                text: "Name the new Character!",
                main: false
            },
            {
                id: "section4",
                title: "Finish Adding The New Character",
                imagePath: CharacterCastSubmit,
                text: "Click 'Submit' to finish adding the newly created Character in the Story’s cast of characters.",
                main: false
            },
            {
                id: "section5",
                title: "Checkout The Newly Added Character",
                imagePath: CharacterCastSelect,
                text: "The user now have a newly created Character listed in the 'Character Dropdown'. Click on this dropdown to see the whole list!",
                main: false
            },
            {
                id: "section4",
                imagePath: CharacterCastAfterSelect,
                imagePath2: CharacterCastAfterEdit,
                text: "Select the Character. The user can now edit or delete this Character anytime as needed.",
                main: true
            },

        ],
        "Edit Story Events": [
            {
                id: "section1",
                imagePath: search, //switch photo
                imagePath: search,
                text: "A ‘Event’ is a single section of text that will pop up on one page and will only be associated with one Character. Each ‘Event’ can be connected up to 1-3 different ‘Options’",
                main: true
            },
            {
                id: "section2",
                imagePath: storyname, //switch photo
                imagePath2: storyname,
                text: "An ‘Option’ is a clickable choice that will take the player to the next link Event.",
                main: true
            },
            {
                id: "section3",
                imagePath: storyname, //switch photo
                text: "Click ‘Edit’ to edit this specific Event.",
                main: true
            },
            {
                id: "section4",
                imagePath: storyname, //switch photo
                text: "Select a Character that is associated with this Event. If the Character of choice doesn’t exist, you can add them in this section here. \n\nThis section works similarly to the 'Story Character Cast' section in the previous page.",
                main: false
            },
            {
                id: "section5",
                imagePath: storyname, //switch photo
                text: "Write the very first line of narrative here.",
                main: false
            },

        ],
        "Finish Editing Your Story": [
            {
                id: "section1",
                title: "Make a Choice",
                imagePath: makechoice,
                text: "This section is integral to the interactive storytelling experience. As a player, you're presented with different choices or paths that your character can take. Each decision made will influence the storyline and lead to varying outcomes. ",
                main: false
            },
            {
                id: "section2",
                title: "Narrate",
                imagePath: narrate,
                text: " This section displays the narrative unfolding based on the choices you make. It details the characters' reactions, the environment, and the subsequent events. As the name suggests, it narrates the story, immersing you in the fictional world. ",
                main: false
            },
            {
                id: "section3",
                title: "History Log",
                imagePath: historylog,
                text: "This section keeps track of your progress throughout the story. It logs the choices you've made and the paths you've taken, allowing you to reflect on past decisions and their outcomes.",
                main: false
            },
            {
                id: "section4",
                title: "Save & Clear",
                imagePath: saveclear,
                text: "This section is about managing your story progression. You can save your progress at any point, which is particularly useful for long narratives. If desired, you can also clear the history, effectively restarting the story from the beginning. ",
                main: false
            },
            {
                id: "section5",
                title: "Back",
                imagePath: back,
                text: "click we can go back to the user home page",
                main: false
            },
        ],
        "About Myth Maker?": [
            {
                id: "section1",
                imagePath: MMlogo,
                text: "Myth Maker is a 3 week long project made by Anyi Chen, Diana Hung, Hafeefa Sultan and Jianing Wei as part of the Brooklyn College Tech Talent Pipeline Program. Our goal is to enable creative minds to share their craft with the world, as easily as possible and as fun as possible.",
                main: true
            },
        ],
    };

    return (
        <div className="about_page_root">
            <div className="about_page_background">
                <ParticleBackground />
            </div>
            <div className="about_page_container">
                <AboutNavBar majorSections={Object.keys(majorSectionsData)} />
                {Object.entries(majorSectionsData).map(([majorSection, sections]) =>
                    <AboutMajorSection
                        key={majorSection}
                        title={majorSection}
                        sections={sections}
                    />
                )}
                <ScrollButton />
            </div>
        </div>
    );
};

export default AboutPage;