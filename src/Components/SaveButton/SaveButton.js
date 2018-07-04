import React from 'react';
import './SaveButton.css';

const SaveButton = (props) => (
    <button className = 'btn sav-btn btn-lg' id = {props.id}>
        Save this Article
    </button>
);

export default SaveButton;