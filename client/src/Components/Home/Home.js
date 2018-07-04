import React from 'react';
import Story from '../Story/Story.js';
import './Home.css';

const Home = (props) => (
    <div>
       {props.stories.map( story => 
       <Story headline = {story.headline} summary = {story.summary} url = {story.url}/>
       )}
    </div>
);

export default Home;