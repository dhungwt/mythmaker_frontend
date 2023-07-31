import React from "react";
import AboutNavBar from "../components/About Page Component/AboutNavBar";
import AboutMajorSection from "../components/About Page Component/AboutMajorSection";
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
import CreateStoryButton from "../pages/assets/screenshots/CreateStoryButton.png";
import NewStoryOnHomePage from "../pages/assets/screenshots/NewStoryOnHomePage.png";
import EditPageTitle from "../pages/assets/screenshots/EditPageTitle.png";
import CharacterCast from "../pages/assets/screenshots/CharacterCast.png";
import CharacterCastAdd from "../pages/assets/screenshots/CharacterCast_Add.png";
import CharacterCastAddName from "../pages/assets/screenshots/CharacterCast_AddName.png";
import CharacterCastSubmit from "../pages/assets/screenshots/CharacterCast_Submit.png";
import CharacterCastSelect from "../pages/assets/screenshots/CharacterCast_Select.png";
import CharacterCastAfterSelect from "../pages/assets/screenshots/CharacterCast_AfterSelect.png";
import CharacterCastAfterEdit from "../pages/assets/screenshots/CharacterCast_AfterEdit.png";
import StoryButton from "../pages/assets/screenshots/StoryButton.png";
import StoryEvent from "../pages/assets/screenshots/StoryEvent.png";
import StoryEventAfterEditSelect from "../pages/assets/screenshots/StoryEventAfterEditSelect.png";
import StoryEventEditSelect from "../pages/assets/screenshots/StoryEventEditSelect.png";
import StoryEventPlayEx from "../pages/assets/screenshots/StoryEventPlayEx.png";
import StoryEventEditEvent from "../pages/assets/screenshots/StoryEventEditEvent.png";
import StoryEventEditCharacter from "../pages/assets/screenshots/StoryEventEditCharacter.png";
import StoryEventExOption from "../pages/assets/screenshots/StoryEventExOption.png";
import StoryEventExOption2 from "../pages/assets/screenshots/StoryEventExOption2.png";
import StoryEventExOption3 from "../pages/assets/screenshots/StoryEventExOption3.png";
import StoryEventOption from "../pages/assets/screenshots/StoryEventOption.png";
import EditOption1 from "../pages/assets/screenshots/EditOption1.png";
import EditOption3 from "../pages/assets/screenshots/EditOption3.png";
import EditOptionDefault from "../pages/assets/screenshots/EditOptionDefault.png";
import EditOptionAllDefault from "../pages/assets/screenshots/EditOptionAllDefault.png";
import EditOptionSave from "../pages/assets/screenshots/EditOptionSave.png";
import EditEventSave from "../pages/assets/screenshots/EditEventSave.png";
import NewEvent from "../pages/assets/screenshots/NewEvent.png";
import FinishStory from "../pages/assets/screenshots/FinishStory.png";
import FinishStory2 from "../pages/assets/screenshots/FinishStory2.png";
import Final from "../pages/assets/screenshots/lastImage.png"






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
                id: "section6",
                imagePath: CharacterCastAfterSelect,
                imagePath2: CharacterCastAfterEdit,
                text: "Select the Character. The user can now edit or delete this Character anytime as needed! \nClick 'Cancel' to close the edit character tab without saving.",
                main: true
            },

        ],
        "Edit Story Events": [
            {
                id: "section1",
                title: "Events Example",
                imagePath: StoryEvent,
                imagePath2: StoryEventPlayEx,
                text: "An ‘Event’ is a single section of text that will pop up on one page and will only be associated with one Character. Each ‘Event’ can be connected up to 1-3 different ‘Options’",
                main: true
            },
            {
                id: "section2",
                imagePath: StoryEventEditSelect,
                imagePath2: StoryEventAfterEditSelect,
                text: "Click ‘Edit’ to edit the specific Event. Let's edit the very first Event!",
                main: true
            },
            {
                id: "section3",
                imagePath: StoryEventEditCharacter,
                text: "Select a Character that is associated with this Event. If the Character of choice doesn’t exist, you can add them in this section here. \n\nThis section works similarly to the 'Story Character Cast' section in the previous page.",
                main: false
            },
            {
                id: "section4",
                imagePath: StoryEventEditEvent,
                text: "Scroll down slightly and Write the very first line of narrative here. \n\nThis is the first line that will type itself out in the dialogue box when a player first open this story.",
                main: false
            },
            {
                id: "section6",
                text: "Before we continue to add Options to the first Event, let's stop for a moment to look at an example Option and understand what is an 'Option'!",
                main: true
            },
            {
                id: "section7",
                title: "Option Example",
                imagePath: StoryEventExOption,
                imagePath2: StoryEventExOption2,
                imagePath3: StoryEventExOption3,
                text: "An ‘Option’ is a clickable choice that will take the player to the next link Event.. \n\n'Option Text' is the Event Text that will type itself out after clicking on the associated 'Option Name' choice.",
                main: true
            },
            {
                id: "section8",
                text: "Back to editing our first Event! Scroll all the way down to the 'Add Event Options' section.",
                main: true
            },
            {
                id: "section9",
                imagePath: StoryEventOption,
                text: "Here's where the user can attach Options that will lead the players to different path of the story.",
                main: true
            },
            {
                id: "section10",
                imagePath: EditOption1,
                text: "Fill in Option 1’s Name and Text! \nRemember Option Name is the clickable choice that leads to the next Event and Option Text is the Event text that will play out when the Option is clicked.",
                main: false
            },
            {
                id: "section11",
                imagePath: EditOptionSave,
                text: "Click the ‘Save Changes’ button to save your Option changes!",
                main: false
            },
            {
                id: "section12",
                imagePath: EditOption3,
                text: "Fill up Option 2 and Option 3 to give the player more selections! Remember to click 'Saves Changes' to save your Option!",
                main: true
            },
            {
                id: "section13",
                imagePath: EditOptionDefault,
                text: "Rewrite Option Name back to 'Default Option Name' to opt it out of player's pool of choices!",
                main: false
            },
            {
                id: "section14",
                imagePath: EditOptionAllDefault,
                text: "Setting all Option Name to 'Default Option Name' will trigger the ending screen on the player's side.",
                main: false
            },
            {
                id: "section15",
                imagePath: EditEventSave,
                text: "Now that the first event is finished, click the ‘Edit Event’ button to head back to the ‘Edit Story’ Page with your Save changes! \n\n Clicking the ‘Back’ button will abandon all your changes.",
                main: true
            },
            {
                id: "section16",
                imagePath: NewEvent,
                text: "Back to the ‘Edit Story’ page, the user can now scroll down to see the newly added Events. Match the Names to figure out which Event is connected to the parent Event Option.",
                main: true
            },
            {
                id: "section17",
                imagePath: StoryButton,
                text: "Scroll all the way down and click on the 'Save Story' button to not lost the hard work. \n\n Click the 'Delete Button' if you wish to abandon this Story",
                main: true
            },
            {
                id: "section18",
                text: "Now let your creative mind go while and take your time writing out the 2nd event, 3rd event, 100th event and more!",
                main: true
            },

        ],
        "Finish Editing Your Story": [
            {
                id: "section1",
                imagePath: FinishStory,
                imagePath2: FinishStory2,
                text: "Congradulation on finishing your story. Now scroll down your homepage and give your very own self wriiten advanture a try!",
                main: true
            },
            {
                id: "section2",
                imagePath: Final,
                text: "Are you satisfy with your story so far? Now's the time to copy that link and share it with all your friends!",
                main: true
            },
        ],
        "About Myth Maker?": [
            {
                id: "section1",
                imagePath: MMlogo,
                text: "Myth Maker is a 3 week long Capstone project made by Anyi Chen, Diana Hung, Hafeefa Sultan and Jianing Wei as part of the Brooklyn College Tech Talent Pipeline Program. Our goal is to enable creative minds to share their craft with the world, as easily as possible and as fun as possible.",
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