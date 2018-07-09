import React from 'react';
import Story from '../Story/Story.js';
import './Home.css';

const Home = (props) => (
    <div>
       {props.stories.map( story => 
       <Story key = {story.id} headline = {story.headline} summary = {story.summary} url = {story.url} date = {props.date}/>
       )}
    </div>
);

export default Home;