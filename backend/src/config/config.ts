const config = {
  mongoURI: 'mongodb://localhost:27017/myapp',
  jwtSecret: 'mysecretkey',
  emailHost: 'smtp.example.com',
  emailPort: 587,
  emailUser: 'user@example.com',
  emailPassword: 'password',
  emailFrom: 'noreply@example.com',
};

module.exports = config;