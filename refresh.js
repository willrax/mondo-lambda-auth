var request = require('request');
var config = require('./config/prod');

exports.handler = function(event, context) {
  var form = {
    client_secret: config.client_secret,
    client_id: config.client_id,
    grant_type: 'refresh_token',
    refresh_token: event.token
  }

  request.post({ url: config.host, form: form }, function(err, httpResponse, body) {
      context.succeed(JSON.parse(body));
  });
}
