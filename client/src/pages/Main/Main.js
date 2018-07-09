import React, { Component } from 'react';
import Navbar from "../../Components/Navbar";
import Home from "../../Components/Home";
// import Saved from "./Components/Saved";
import Footer from "../../Components/Footer";
import API from '../../utils/API';
import './Main.css';
import '../../App';

class Main extends Component {
  state = {
    stories: [
      {
        id: 1,
        headline: 'no stories yet',
        summary: "Scrape new stories or check out your saved stories",
        url: '',
        date: ''
      },
      {
        id: 2,
        headline: 'headline',
        summary: 'summary',
        url: 'about:blank',
        date: ''
      },
      {
        id: 3,
        headline: 'yo',
        summary: 'hello',
        url: '',
        date: ''
      }
    ]
  }

  handleScrape = () => {
    API.scrape('news')
      .then(res => {
        console.log(res);
        const newStories = [];
        // eslint-disable-next-line
        res.data.response.docs.map(story => {
          const newStory = {
            id: res.data.response.docs.indexOf(story),
            headline: story.headline.main,
            summary: story.snippet,
            date: story.pub_date,
            url: story.web_url
          };
          newStories.push(newStory);
        })
        console.log(newStories);
        this.setState({
          stories: newStories
        })
      })
  }

  handleSaved = () => {
    return 0;
  }

  render() {
    return (
      <div>
        <Navbar handleScrape = {this.handleScrape} handleSaved = {this.handleSaved}/>
        <div className = 'buffer'></div>
        <Home stories = {this.state.stories} />
        <Footer />
      </div>
    );
  }
}

export default Main;