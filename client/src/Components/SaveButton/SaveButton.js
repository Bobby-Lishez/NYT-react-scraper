import React from 'react';
import API from '../../utils/API';
import './SaveButton.css';

const SaveButton = (props) => (
    <button className = 'btn sav-btn btn-lg' id = {props.id} onClick = {props.onClick}>
        Save this Article
    </button>
);

export default SaveButton;