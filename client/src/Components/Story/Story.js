import React, {Component} from 'react';
import SaveButton from '../SaveButton/SaveButton';
import DeleteButton from '../DeleteButton/DeleteButton';
import API from '../../utils/API';
import './Story.css';

class Story extends Component {
    handleSave = (article) => {
        const newArticle = {
            headline: article.headline,
            summary: article.summary,
            url: article.url,
            date: article.date
        }
        API.saveArticle(newArticle)
        .then(res => console.log('article saved'))
        .catch(err => console.log(err))
    };

    handleDelete = (article) => {
        API.deleteArticle(article.id)
        .then(res => console.log('article deleted'))
        .catch(err => console.log(err))
    };
    render() {
        if(this.props.saved){
        return (
        <div className='card story-card'>
            <div className='card-header'>
                <a href={this.props.url}>{this.props.headline}</a>
            </div>
            <div className='card-body'>
                {this.props.summary}<br />
                <SaveButton id={`save-${this.props.id}`} onClick = {() => this.handleSave(this.props)}/>
            </div>
        </div>
        )
    } else {
        return (
            <div className='card story-card'>
            <div className='card-header'>
                <a href={this.props.url}>{this.props.headline}</a>
            </div>
            <div className='card-body'>
                {this.props.summary}<br />
                <DeleteButton id={`save-${this.props.id}`} onClick = {() => this.handleDelete(this.props)}/>
            </div>
        </div>
        )
    }}
}

export default Story;