var request = require('request');

exports.handler = function(event, context) {
  var form = {
    client_secret: 'LuUkFoNox8NLuT1gaG59riC/mHIaI9f6og5S57x6xAiO/3fMpVbuj3+JDEjiwt750/7Y36mImrl9WrFPxy0w',
    client_id: 'oauthclient_000092Xv5PI1Q7WWFRRhUP',
    grant_type: 'password',
    username: event.username,
    password: event.password
  }

  request.post({ url:'https://production-api.gmon.io/oauth2/token', form: form }, function(err, httpResponse, body) {
      context.succeed(JSON.parse(body));
  });
}
