import React from "react";
import AboutSection from "./AboutSection";
import "./AboutMajorSection.css";

const AboutMajorSection = ({ title, sections }) => {
    return (
        <div id={title} className="majorsection_root">
            <h1 className="majorsection_text">{title}</h1>
            <div className="majorsections_Container">
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
        </div>
    );
};

export default AboutMajorSection;