import axios from "axios";

const APIKEY = 'b9f91d369ff59547cd47b931d8cbc56b:0:74623931';

const queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=' + APIKEY + '&q=';

export default {
  //searches new articles from ny times
  scrape: function(query) {
    return axios.get(`${queryURL}${query}`);
  }, 
  // Gets all saved articles
  getSaved: function() {
    return axios.get("/api/saved");
  },
  // Deletes the article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/saved/" + id);
  },
  // Saves an article to the database
  saveArticle: function(article) {
    return axios.post("/api/saved", article);
  }
};