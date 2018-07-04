import React from 'react';
import SaveButton from '../SaveButton/SaveButton';
import DeleteButton from '../DeleteButton/DeleteButton';
import './Story.css';

const Story = (props) => (
    <div className = 'card story-card'>
        <div className = 'card-header'>
            <a href = {props.url}>{props.headline}</a>
        </div>
        <div className = 'card-body'>
            {props.summary}<br />
            <SaveButton id = {`save-${props.id}`} />|
            <DeleteButton id = {`save-${props.id}`} />
        </div>
    </div>
);

export default Story;