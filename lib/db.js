var DATABASE_URL = 'postgres://afvdtixvsstjbr:kQbVK8FEScbGOHgPX94eJPj0J2@ec2-54-204-47-70.compute-1.amazonaws.com:5432/d6mdld57enjhun';
var Promise      = require('bluebird');
var _            = require('lodash');

var knex = require('knex')({
  client: 'pg',
  connection: DATABASE_URL + '?ssl=true',
  debug: true
});

var Bookshelf = require('bookshelf')(knex);
var Schema = require('./schema');
createTable('oncalls').then(function() {
  console.log('created');
}).catch(function(err) {
  console.error('err: ',err);
});
