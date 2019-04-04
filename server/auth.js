const jwt = require('express-jwt');
const jwtAuthz = require('express-jwt-authz');
const jwksRsa = require('jwks-rsa');

const checkJwt = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://cognito-idp.us-east-1.amazonaws.com/us-east-1_RRkXdEPfh/.well-known/jwks.json'
    }),
    issuer: 'https://cognito-idp.us-east-1.amazonaws.com/us-east-1_RRkXdEPfh',
    algorithms: ['RS256']
});

const checkScopes = jwtAuthz([ 'read:messages' ]);

module.exports = { checkJwt, checkScopes };