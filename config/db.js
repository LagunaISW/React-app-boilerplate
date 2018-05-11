if (process.env.NODE_ENV === 'test') {
  module.exports = {
    url: 'mongodb://localhost/my-mongo'
  };
} else if (process.env.NODE_ENV === 'staging') {
  module.exports = {
    url: process.env.MONGODB_URL || 'mongodb://localhost/my-mongo-test'
  };
} else {
  module.exports = {
    url: process.env.MONGODB_URL || 'mongodb://localhost/my-mongo'
  };
}
