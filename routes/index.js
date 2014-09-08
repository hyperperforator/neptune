/**
 * Module dependencies
 */
var express = require('express');

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
  	feed('http://feeds.feedburner.com/owenwilliams?format=xml', function(err, articles) {
 		feed('http://thenextweb.com/author/owilliams/feed/', function(err, articles2) {
 			feed('http://us8.campaign-archive2.com/feed?u=7ba9643cb80dac69c6818848c&id=00010c34a8', function(err, articles3) {
  
			 res.render('index', {
			      title: "Hi, I'm Owen Williams!",
			      article : articles,
			      thenextweb : articles2,
			      charged : articles3
			    });
			});
		});
	});    
  });

indexRouter.route('/newsletter')
  .all(function (req, res) {
  	res.render('newsletter', {
            title: 'Charged Newsletter'
			    });
  });

  indexRouter.route('/newsletter/sponsor')
  .all(function (req, res) {
  	res.render('sponsor', {
			      title: 'Charged Newsletter | Sponsor'
			    });
  });

  indexRouter.route('/newsletter/love')
  .all(function (req, res) {
  	res.render('love', {
			      title: 'Charged Newsletter | Love'
			    });
  });

    indexRouter.route('/applebingo')
  .all(function (req, res) {
    res.render('applebingo', {
            title: 'Apple September Event Bingo'
          });
  });

  indexRouter.route('/newsletter/about')
  .all(function (req, res) {
  	res.render('about', {
			      title: 'Charged Newsletter | About'
			    });
  });

    indexRouter.route('/newsletter/complete')
  .all(function (req, res) {
  	res.render('complete', {
			      title: 'Charged Newsletter | All Signed Up'
			    });
  });


exports.indexRouter = indexRouter;
  // Each article has the following properties:
  // 
  //   * "title"     - The article title (String).
  //   * "author"    - The author's name (String).
  //   * "link"      - The original article link (String).
  //   * "content"   - The HTML content of the article (String).
  //   * "published" - The date that the article was published (Date).
  //   * "feed"      - {name, source, link}
  // 