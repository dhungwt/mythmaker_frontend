import React from 'react';

//Here we create the navigation

const AboutNavBar = ({majorSections}) => {
    return (
        <nav>
            {majorSections.map(majorSection => 
                <a key={majorSection} href={`#${majorSection}`}>{majorSection}</a>
            )}
        </nav>
    );
};

export default AboutNavBar;