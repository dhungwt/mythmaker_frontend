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





const AboutPage = () => {
    const majorSectionsData = {
        "User Home": [
            {
                id: "section1",
                title: "Create a New Story",
                imagePath: createstory,
                text: "This section allows users to create their own unique narratives. By employing the interactive tools available, you can draft a plot, design characters. "
            },
            {
                id: "section2",
                title: "Play History",
                imagePath: playhistory,
                text: "This section showcases the history of stories you've played. It gives a summary of your choices, the characters you've interacted with, and the storylines you've explored. Click on the title to continue your journey!"
            },
            {
                id: "section3",
                title: "Stories Created Edit & Play",
                imagePath: storiescreated,
                text: "This section is designed to modify and play the narratives you've crafted. Here, you can make necessary alterations to your story, be it minor adjustments or major plot twists. Once editing is done, you can play through your narrative, experiencing it firsthand."
            },

        ],
        "Create Story": [
            {
                id: "section1",
                title: "Title",
                imagePath: title,
                text: "This is the initial step in your story creation process. Here, you're prompted to name your narrative. Choosing a compelling title is crucial as it piques the interest of potential readers and provides a sneak peek into your story's theme. "
            },
            {
                id: "section2",
                title: "Select Character",
                imagePath: selectyourcharacter,
                text: "This section allows you to choose or design characters for your story. You can pick from preset options or design your own unique persona to enhance the plot"
            },
            {
                id: "section3",
                title: "Current Events Delete & Edit",
                imagePath: currentevent,
                text: "This section provides a list of events happening in your story. It allows you to modify these events or even remove them if they no longer align with your plot"
            },
            {
                id: "section4",
                title: "Save Changes & Delete Story",
                imagePath: savedelete,
                text: "The final section is about saving any changes made to the story or deleting the story if desired. It's a safeguard for your creative process, ensuring that all your edits are stored correctly, or enabling you to start fresh if you decide to discard the current story. "
            },

        ],
        "Edit Event": [
            {
                id: "section1",
                title: "Select Character",
                imagePath: selectyourcharacter,
                text: "This is the first step in the event editing process. In this section, you are required to choose the character that this event pertains to. You can choose or design characters for your story. You can pick from preset options or design your own unique persona to enhance the plot"
            },
            {
                id: "section2",
                title: "Describe Event Name & Text",
                imagePath: eventnametext,
                text: "This section allows you to assign a name to the event and describe it in detail. The event name should give a quick overview of what to expect, while the description provides the context, setting, and plot elements. "
            },
            {
                id: "section3",
                title: "Options Name & Text",
                imagePath: optionnametext,
                text: " This section enables you to specify the different choices or options that your characters have within the event. Each option can lead the story in a different direction, making your narrative interactive and dynamic. Based on the option you provide, we will create new event for that option. if you don't need option, keep the default name!"
            },
            {
                id: "section4",
                title: "Edit Event",
                imagePath: editevent,
                text: "In this final section, you can make changes to any aspect of the event that you've previously created or selected. This includes modifying characters, the event description, or the options available to characters."
            },

        ],
        "Browse Stories": [
            {
                id: "section1",
                title: "Search",
                imagePath: search,
                text: "This section facilitates your navigation through the plethora of stories available. You can use the names of stories to find the stories that most interest you."
            },
            {
                id: "section2",
                title: "Story Name",
                imagePath: storyname,
                text: "In this section, by clicking on a story's name, you can access to play the story. "
            },

        ],
        "Play Story": [
            {
                id: "section1",
                title: "Make a Choice",
                imagePath: makechoice,
                text: "This section is integral to the interactive storytelling experience. As a player, you're presented with different choices or paths that your character can take. Each decision made will influence the storyline and lead to varying outcomes. "
            },
            {
                id: "section2",
                title: "Narrate",
                imagePath: narrate,
                text: " This section displays the narrative unfolding based on the choices you make. It details the characters' reactions, the environment, and the subsequent events. As the name suggests, it narrates the story, immersing you in the fictional world. "
            },
            {
                id: "section3",
                title: "History Log",
                imagePath: historylog,
                text: "This section keeps track of your progress throughout the story. It logs the choices you've made and the paths you've taken, allowing you to reflect on past decisions and their outcomes."
            },
            {
                id: "section4",
                title: "Save & Clear",
                imagePath: saveclear,
                text: "This section is about managing your story progression. You can save your progress at any point, which is particularly useful for long narratives. If desired, you can also clear the history, effectively restarting the story from the beginning. "
            },
            {
                id: "section5",
                title: "Back",
                imagePath: back,
                text: "click we can go back to the user home page"
            },
        ],
        "Navigation Bar": [
            {
                id: "section1",
                title: "Stories",
                imagePath: stories,
                text: " This section leads users to the repository of available stories. By clicking on this option, you can browse, select, and interact with the narratives on offer."
            },
            {
                id: "section2",
                title: "Home",
                imagePath: home,
                text: "This section brings users back to the start page of the application. No matter where you are within the platform, you can quickly return to the application home page by clicking on this option. "
            },
            {
                id: "section3",
                title: "Home Pages",
                imagePath: homepage,
                text: "This section brings users back to the user main of the application. No matter where you are within the platform, you can quickly return to the user homepage by clicking on this option. "
            },
            {
                id: "section4",
                title: "Login & Logout & Signup",
                imagePath: login,
                text: "This section handles the user authentication process. Login is for existing users to enter their credentials and access their accounts. Signup is for new users who want to create an account, and Logout allows users to sign out of their account, ensuring their privacy and security."
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