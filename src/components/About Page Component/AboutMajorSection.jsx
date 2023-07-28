import React from "react";
import AboutSection from "./AboutSection";

const AboutMajorSection = ({ title, sections }) => {
    return (
        <div id={title}>
            <h1>{title}</h1>
            {sections.map(section => 
                <AboutSection 
                    key={section.id}
                    id={section.id}
                    title={section.title}
                    imagePath={section.imagePath}
                    text={section.text}
                />
            )}
        </div>
    );
};

export default AboutMajorSection;