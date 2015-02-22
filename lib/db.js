var DATABASE_URL = 'postgres://afvdtixvsstjbr:kQbVK8FEScbGOHgPX94eJPj0J2@ec2-54-204-47-70.compute-1.amazonaws.com:5432/d6mdld57enjhun';
var Promise = require('bluebird');
var strf = require('util').format;

var knex = require('knex')({
  client: 'pg',
  connection: DATABASE_URL + '?ssl=true',
  debug: true
});
var Bookshelf = require('bookshelf')(knex);

var OnCall = Bookshelf.Model.extend({
  tableName: 'oncalls'
},

// Class Methods
{
  activeOnDayAtTimeForServiceInNeighborhood: Promise.method(function(date, time, serviceId, neighborhoodId) {
    var timeQueryStr = strf("'%s' between \"begins_at_time\" and \"ends_at_time\"", time);

    return knex('oncalls')                           // scheduled providers
           .where('service_id', serviceId)           // appropriate service
           .where('neighborhood_id', neighborhoodId) // appropriate neighborhood
           .where('first_date_active', '<=', date)   // is active
           .where(function() {                       // and not (yet?) expired
             this.whereNull('last_date_active')
                 .orWhere('last_date_active', '>=', date)
           })
           .whereRaw(timeQueryStr);                  // begins_at_time <= time <= ends_at_time
  }),
});

// tester
var date = '2015-05-21';
var time = '04:00:00-05:00';
var serviceId = 1;
var neighborhoodId = 1;

OnCall.activeOnDayAtTimeForServiceInNeighborhood(date, time, serviceId, neighborhoodId)
      .then(function(results) {
        console.log('results: ',results);
      });
