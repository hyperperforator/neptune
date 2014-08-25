/**
 * Module dependencies
 */
var express = require('express');
var feeds = require('./feeds.js');
var feed = require('feed-read');


//setInterval(feeds.loadOwened, 50000);

/**
 * the new Router exposed in express 4
 * the indexRouter handles all requests to the `/` path
 */
var indexRouter = express.Router();


/**
 * this accepts all request methods to the `/` path
 */
indexRouter.route('/')
  .all(function (req, res) {
  	feeds.loadOwened(function(){
	console.log("test");
});
  	feed('http://feeds.feedburner.com/owenwilliams?format=xml', function(err, articles) {
 
  // Each article has the following properties:
  // 
  //   * "title"     - The article title (String).
  //   * "author"    - The author's name (String).
  //   * "link"      - The original article link (String).
  //   * "content"   - The HTML content of the article (String).
  //   * "published" - The date that the article was published (Date).
  //   * "feed"      - {name, source, link}
  // 
  
 res.render('index', {
      title: 'owen',
      article : articles
    });
});
    
  });

exports.indexRouter = indexRouter;
