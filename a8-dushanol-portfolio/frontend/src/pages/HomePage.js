import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import MovieList from '../components/MacroList';
import { Link } from 'react-router-dom';

function HomePage(){
    return(
        <>
        <h2>Lora Dushanova - Web Dev Portfolio</h2>
        <article></article>
        <h4>About this portfolio</h4>
        <p>This portfolio project came about while taking a Web Development course at Oregon State University (OSU).</p>
        <p>While working full time as a Financial Analyst, I have also developed a keen interest in Computer Science.
        My day-to-day job is to monitor my company's cloud spend and forecast future spending. Being 
        inquisitive by nature, I began to dive deeper into engineers' efforts
        to reduce cloud spend: re-formulating algorithms to use less compute time; re-structuring databases to 
        better utilize storage, and others. 
        </p>
        <p>I became so enthrolled with the topic and its complexity that I decided to take some computer 
            science courses at the local community college. After a couple of courses, I decided to pursue a
            post-baccalaureate in Computer Science, which is what brought me to OSU. 
        </p>
        <p>My interests in computer science have begun to narrow. I am fascinated by the "Latin of programming
            languages" - C. Currently, I am working an Interpreter written in C, utilizing Robert Nystrom's
            book "Crafting Interpreters".
        </p>
        <p>My career goal at this time is to experience computer science in the wild by taking on an intersnip.
            I hope to find an intersnip that will further my interest in C. 
        </p>

        <h4>Technologies used in this portforlio</h4>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Node</li>
                <li>Express</li>
                <li>Asynchronous Programming</li>
                <li>DOM Classes</li>
                <li>REST API</li>
                <li>MongoDB and Mongoose</li>
                <li>React API</li>
            </ul>

        </>
    );
}

export default HomePage;