var DATABASE_URL = 'postgres://afvdtixvsstjbr:kQbVK8FEScbGOHgPX94eJPj0J2@ec2-54-204-47-70.compute-1.amazonaws.com:5432/d6mdld57enjhun';

var knex = require('knex')({
  client: 'pg',
  connection: DATABASE_URL + '?ssl=true',
  debug: true
});
var Bookshelf = require('bookshelf')(knex);
var OnCall = require('../models/on-call')(knex,Bookshelf);

// tester
var date = '2015-03-21';
var time = '11:00:00-05:00';
var serviceId = 1;
var neighborhoodId = 1;

OnCall.activeOnDayAtTimeForServiceInNeighborhood(date, time, serviceId, neighborhoodId)
      .then(function(results) {
        console.log('results: ',results);
      });
