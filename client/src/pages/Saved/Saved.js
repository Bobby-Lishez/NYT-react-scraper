import React, { Component } from 'react';
import Home from '../../Components/Home/Home';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import API from '../../utils/API';
import './saved.css';

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
                stories: res
            })
        .catch(err => console.log(err))
        })
    }
    render() {
        // eslint-disable-next-line
        return (
           <div>
               <Navbar handleScrape = {this.handleScrape} handleSaved = {this.handleSaved}/>
               <div className = 'buffer'></div>
               <div>
                   My saved articles
               </div>
                <Home stories = {this.state.stories} saved = {true}/>
                <Footer />
           </div>
        )
    }
}

export default Saved;