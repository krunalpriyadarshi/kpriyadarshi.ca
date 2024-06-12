// src/components/marquee/MaMarquee.js
import React, { useEffect } from 'react';
import './Marquee.css';

// if alt image --> use it for icons.
const MaMarquee = () => {
    useEffect(() => {
        const root = document.documentElement;
        const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--ma-elements-displayed");
        const marqueeContent = document.querySelector("ul.ma-content");

        root.style.setProperty("--ma-elements", marqueeContent.children.length);

        for (let i = 0; i < marqueeElementsDisplayed; i++) {
            marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
        }
    }, []);

    return (
        <div className="ma-container">
            <h2 className="ma-title">Programming Languages & Tools</h2>
            <div className="ma-marquee">
                <ul className="ma-content">
                    <li><i className="fab fa-python"></i></li>
                    <li><i className="fab fa-js"></i></li>
                    <li><i className="fab fa-node-js"></i></li>
                    <li><i className="fab fa-react"></i></li>
                    <li><i className="fab fa-java"></i></li>
                    <li><i className="fas fa-database"></i></li>
                    <li><i className="fas fa-server"></i></li>
                    <li><i className="fab fa-aws"></i></li>
                    <li><i className="fab fa-docker"></i></li>
                    <li><i className="fab fa-git"></i></li>
                    <li><i className="fas fa-code"></i></li>
                    <li><i className="fas fa-code-branch"></i></li>
                    <li><i className="fab fa-html5"></i></li>
                </ul>
            </div>
        </div>
    );
};

export default MaMarquee;
