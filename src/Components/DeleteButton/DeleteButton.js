import React from 'react';
import './DeleteButton.css';

const DeleteButton = (props) => (
    <button className = 'btn del-btn btn-lg' id = {props.id}>
        Delete this Article
    </button>
);

export default DeleteButton;