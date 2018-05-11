const secret = require('./secret');

process.env.DOMAIN = 'https://www.example.com';
process.env.PORT = 2018;
process.env.JWT_SECRET = secret.JWT_SECRET;
process.env.ANOTHER_SECRET = secret.ANOTHER_SECRET;
