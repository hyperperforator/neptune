var feed = require('feed-read');
var exports = module.exports = {};

exports.loadOwened = function() {
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
console.log(articles);
 return("articles");
});

};
