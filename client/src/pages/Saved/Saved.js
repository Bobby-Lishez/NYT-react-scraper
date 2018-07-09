import React, { Component } from 'react';
import Home from '../../Components/Home/Home';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Story from '../../Components/Story/Story';
// eslint-disable-next-line
import { Col, Row, Container } from "../../Components/Grid";
import API from '../../utils/API';

class Saved extends Component {
    state = {
        stories: []
    };

    componentDidMount(){
        this.loadArticles();
    };

    loadArticles = () => {
        API.getSaved()
        .then(res => {
            this.setState({
                stories: res.data
            })
        .catch(err => console.log(err))
        })
    }
    render() {
        // eslint-disable-next-line
        return (
           <div>
              {/* eslint-disable-next-line
               {this.state.stories.map(story => {
                   // eslint-disable-next-line
                   <Story key = {story.id} headline = {story.headline} url = {story.url} summary = {story.summary} date = {story.date}/>
               })} */}
               <Navbar handleScrape = {this.handleScrape} handleSaved = {this.handleSaved}/>
                <Home stories = {this.state.stories} />
                <Footer />
           </div>
        )
    }
}

export default Saved;