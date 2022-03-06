/* This module may be reused from app to app. Simply include in
  app.js with require('/path') */

const mongoose = require('mongoose');

const password = process.env.MONGODB_PASS;

let dbURI = 'mongodb://localhost/pretrip';
if (process.env.NODE_ENV === 'production') {
  dbURI = `mongodb+srv://owen:${password}@cluster0.23a4d.mongodb.net/pretrip?retryWrites=true&w=majority`;
}

mongoose.connect(dbURI, { useNewUrlParser: true });

mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${dbURI}`);
});
mongoose.connection.on('error', (err) => {
  console.log(`Mongoose connection error:`, err);
});
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

const gracefulShutdown = (msg, callback) => {
  mongoose.connection.close(() => {
    console.log(`Mongoose disconnected through ${msg}`);
    callback();
  });
};

// Nodemon restart
process.once('SIGUSR2', () => {
  gracefulShutdown('nodemon restart', () => [
    process.kill(process.pid, 'SIGUSR2'),
  ]);
});

// App termination
process.on('SIGINT', () => {
  gracefulShutdown('app termination', () => {
    process.exit(0);
  });
});

// Heroku app termination
process.on('SIGTERM', () => {
  gracefulShutdown('Heroku app shutdown', () => {
    process.exit(0);
  });
});

require('./pretripSchema');
require('./users');
