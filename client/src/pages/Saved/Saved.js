import React, { Component } from 'react';
import { Col, Row, Container } from "../../Components/Grid";
import API from '../../utils/API';

class Saved extends Component {
    state = {
        message: 'hello'
    };

    render() {
        return (
            <p>{this.state.message} Content goes here.</p>
        )
    }
}

export default Saved;