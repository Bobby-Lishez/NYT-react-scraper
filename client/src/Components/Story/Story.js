import React, {Component} from 'react';
import SaveButton from '../SaveButton/SaveButton';
import API from '../../utils/API';
import './Story.css';

const Story = (props) => (
<div className = 'card story-card'>
    <div className = 'card-header'>
        <a href = {props.url}>{props.headline}</a>
    </div>
    <div className = 'card-body'>
        {props.summary}<br />
        <SaveButton id = {`save-${props.id}`} />|
    </div>
</div>
);

// class Story extends Component {
//     handleSave = (article) => {
//         const newArticle = {
//             headline: article.headline,
//             summary: article.summary,
//             url: article.url,
//             date: article.date
//         }
//         API.saveArticle(newArticle)
//         .then(res => console.log('article saved'))
//         .catch(err => console.log(err))
//     }
//     render = (props) => {
//         return (
//         <div className='card story-card'>
//             <div className='card-header'>
//                 <a href={props.url}>{props.headline}</a>
//             </div>
//             <div className='card-body'>
//                 {props.summary}<br />
//                 <SaveButton id={`save-${props.id}`} onClick = {this.handleSave(props)}/>|
//             </div>
//         </div>
//         )
//     }
// }

export default Story;