var twitter = require("twitter");
var spotify = require("spotify");
var imdb = require('imdb');

// imdb pulls

// ----------------------------------------------------------------

imdb('tt3659388', function(err, data) {
  if(err)
    console.log(err.stack);
 
  if(data)
    console.log(data);
});

// Spotify pulls

// ----------------------------------------------------------------
 
spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
 
    // Do something with 'data' 
});
 
// Twitter pulls

// ----------------------------------------------------------------

var client = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
});
 
var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});