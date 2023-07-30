import React from 'react';
import "./AboutSection.css";

//we create each section part to hold image and description

const AboutSection = ({ id, title, imagePath, imagePath2, imagePath3, text, main }) => {

    if(main) {
        return (
            <section id={id} className="about_section_root_main">
                {title && <h2 className="about_title">{title}</h2>}
                <div>
                    <img className="about_image" src={imagePath} />
                    {imagePath2 && <img className="about_image" src={imagePath2} />}
                    {imagePath3 && <img className="about_image" src={imagePath3} />}
                    <p className="about_section_text">{text}</p>
                </div>
                
            </section>
        )
    }
        

    return (
        <section id={id} className="about_section_root">
            <h2 className="about_title">{title}</h2>
            <img className="about_image" src={imagePath} />
            <p className="about_section_text">{text}</p>
        </section>
    );
};

export default AboutSection;