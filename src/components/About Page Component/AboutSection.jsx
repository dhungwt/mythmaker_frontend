import React from 'react';

//we create each section part to hold image and description

const AboutSection = ({ id, title, imagePath, text }) => {
    return (
        <section id={id}>
            <h2>{title}</h2>
            <img src={imagePath}  />
            <p>{text}</p>
        </section>
    );
};

export default AboutSection;