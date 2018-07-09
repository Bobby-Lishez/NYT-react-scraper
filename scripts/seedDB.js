const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/nyt-react-scraper",
  {}
);

const bookSeed = [
  {
    date:
    "2018-06-19T22:22:25+0000",
    headline:
    "Richard Valeriani, Veteran NBC News Correspondent, Dies at 85",
    id:
    0,
    summary:
    "A familiar presence on the “Nightly News,” he covered the civil rights movement, the assassination of John F. Kennedy and Kissinger’s shuttle diplomacy.",
    url:
    "https://www.nytimes.com/2018/06/19/obituaries/richard-valeriani-veteran-nbc-news-correspondent-dies-at-85.html"
  },
  {
    date :
    "2018-05-08T12:15:45+0000",
    headline:
    "Weekly News Quiz for Students: Box Office Record, Trump Legal Team, New Diseases",
    id:
    4,
    summary:
    "How well did you follow the news this past week? How many of these 10 questions can you get right?",
    url:
    "https://www.nytimes.com/interactive/2018/05/08/learning/08StudentNewsQuiz-box-office-trump-legal-team-diseases.html"
  },
  {
    date:
    "2018-04-10T12:03:49+0000",
    headline:
    "Weekly News Quiz for Students: Syrian War, F.B.I. Raid, Facebook",
    id:
    9,
    summary:
    "How well did you follow the news these past two weeks? How many of these 10 questions can you get right?",
    url:
    "https://www.nytimes.com/interactive/2018/04/10/learning/10StudentNewsQuiz-Syria-FBI-Facebook.html",
  }
];

db.Articles
  .remove({})
  .then(() => db.Articles.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });