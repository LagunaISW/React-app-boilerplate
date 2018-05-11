const secret = require('./secret');

process.env.DOMAIN = 'https://www.example.com';
process.env.PORT = 2017;
process.env.JWT_SECRET = secret.JWT_SECRET_DEV;
process.env.ANOTHER_SECRET = secret.ANOTHER_SECRET_DEV;
process.env.API_KEY = secret.API_KEY_STG;
