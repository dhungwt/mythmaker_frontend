import React from 'react';
import "./AboutNavBar.css";

//Here we create the navigation

const AboutNavBar = ({majorSections}) => {
    return (
        <nav className='about_navbar_root'>
            {majorSections.map(majorSection => 
                <a key={majorSection} href={`#${majorSection}`} className='about_navbar_link'>{majorSection}</a>
            )}
        </nav>
    );
};

export default AboutNavBar;