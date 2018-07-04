import React, { Component } from 'react';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
// import Saved from "./Components/Saved";
import Footer from "./Components/Footer";
import scrape from './Scripts/scrape';
import './App.css';

class App extends Component {
  state = {
    stories: [
      {
        id: 1,
        headline: 'no stories yet',
        summary: "Scrape new stories or check out your saved stories",
        url: ''
      }
    ]
  }

  handleScrape = () => {
    const newStories = scrape();
    alert(newStories);
    this.setState({
      stories: newStories
    });
  }

  handleSaved = () => {
    return 0;
  }

  render() {
    return (
      <div>
        <Navbar handleScrape = {this.handleScrape} handleSaved = {this.handleSaved}/>
        <Home stories = {this.state.stories} />
        <Footer />
      </div>
    );
  }
}

export default App;
