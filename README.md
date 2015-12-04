# AWS Lambda function for Mondo Authentication

These can be used to build purely front end applications so that you wont need to create a full backend to fetch and refresh tokens.

# Installation

```
git clone https://github.com/willrax/mondo-lambda-auth.git
cd mondo-lambda-auth
mv config/example-prod.js config/prod.js
```

You'll need to fill in `prod.js` with the Mondo API host and your client_id and client_secret.


# Deployment

We'll need to zip the files in order to upload them to AWS.

`zip -r lambda ./`
