import React, { useState, useEffect } from 'react';
import './ScrollButton.css';

const ScrollButton = () => {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        
            <button className="scrollToTop" onClick={scrollToTop} style={{ display: visible ? 'inline' : 'none' }}>
                Top
            </button>
        
    );
}

export default ScrollButton;