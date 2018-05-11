# React-app-boilerplate
Initial configuration for ReactJS projects

## Secrets
You will need to create a `secret.js` file inside of `/config` with your API Keys and other delicated data. This file should NOT be tracked.
Example of `secret.js`:

```javascript
module.exports = {
  JWT_SECRET: 'something',
  JWT_SECRET_DEV: 'something_dev',
  ANOTHER_SECRET: 'something_else',
  ANOTHER_SECRET_DEV: 'something_else_dev',
  API_KEY: 'Asd123QWE'
  API_KEY_STG: 'Asd123QWE_stg'
};
```
