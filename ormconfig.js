const SnakeNamingStrategy = require("typeorm-naming-strategies").SnakeNamingStrategy

module.exports = {
  "type": "mysql",
  "host": process.env.DB_HOST,
  "port": process.env.DB_PORT,
  "username": process.env.USER,
  "password": process.env.PASSWORD,
  "database": process.env.DATABASE,
  "synchronize": false,
  "logging": false,
  "entities": ["{src,dist}/entity/**/*{.ts,.js}"],
  "migrations": ["{src,dist}/migrations/**/*{.ts,.js}"],
  "subscribers": ["{src,dist}/subscribers/**/*{.ts,.js}"],
  namingStrategy: new SnakeNamingStrategy()
}

// const SnakeNamingStrategy = require("typeorm-naming-strategies").SnakeNamingStrategy;
// const isTS = require('detect-ts-node');

// const config = {
//   "name": "default",
//   "type": "mysql",
//   "replication": {
//     "master": {
//       "host": "192.168.30.101",
//       "port": 3306,
//       "username": "boarduser",
//       "password": "boardpass",
//       "database": "boarddb"
//     },
//     "slaves": [{
//       "host": "192.168.30.101",
//       "port": 3307,
//       "username": "boarduser",
//       "password": "boardpass",
//       "database": "boarddb"
//     }]
//   },
//   "synchronize": false,
//   "logging": false,
//   "namingStrategy": new SnakeNamingStrategy()
// };

// if (isTS) {
//   config.entities = [
//     "src/entity/**/*.ts"
//   ];
//   config.migrations = [
//     "src/migration/**/*.ts"
//   ];
//   config.subscribers = [
//     "src/subscriber/**/*.ts"
//   ];
// } else {
//   config.entities = [
//     "./entity/**/*.js"
//   ];
//   config.migrations = [
//     "./migration/**/*.js"
//   ];
//   config.subscribers = [
//     "./subscriber/**/*.js"
//   ];
// }

// module.exports = config;
