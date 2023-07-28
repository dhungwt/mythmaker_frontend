import React from 'react';
import "./AboutSection.css";

//we create each section part to hold image and description

const AboutSection = ({ id, title, imagePath, text }) => {
    return (
        <section id={id} className="about_section_root">
            <h2 className="about_title">{title}</h2>
            <div className="about_image" style={{backgroundImage: `url(${imagePath})`}}></div>
            <p className="about_section_text">{text}</p>
        </section>
    );
};

export default AboutSection;