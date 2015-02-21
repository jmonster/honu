var DATABASE_URL = 'postgres://afvdtixvsstjbr:kQbVK8FEScbGOHgPX94eJPj0J2@ec2-54-204-47-70.compute-1.amazonaws.com:5432/d6mdld57enjhun';
var Promise = require('bluebird');
var strf = require('util').format;

var knex = require('knex')({
  client: 'pg',
  connection: DATABASE_URL + '?ssl=true',
  debug: true
});
var Bookshelf = require('bookshelf')(knex);


var timeOfInterest = '18:00-03:00';

var queryStr = strf("'%s' between \"service_starts_at\" and \"service_ends_at\"", timeOfInterest);
knex('services')
.whereRaw(queryStr)
.then(function(r) {
  console.dir(r);
});
