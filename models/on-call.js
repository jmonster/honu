var Promise = require('bluebird');
var Moment = require('moment');
var strf = require('util').format;

module.exports = function OnCall(knex, Bookshelf) {
  return Bookshelf.Model.extend({
    tableName: 'oncalls'
  },

  // Class Methods
  {
    activeOnDayAtTimeForServiceInNeighborhood: Promise.method(function(date, time, serviceId, neighborhoodId) {
      var timeQueryStr = strf("'%s' between \"begins_at_time\" and \"ends_at_time\"", time);

      var dayAsBitString = (1 << Moment(date).day()) + '::bit(7)'; // 1,2,4,..,64::bit(7)
      var bitStringQuery = strf('("active_on_days" & %s)::int > 0', dayAsBitString); // day of the week in date is encoded in `active_on_Days` bitmask
      return knex('oncalls')                                // scheduled providers
             .where('service_id', serviceId)                // appropriate service
             .whereRaw(bitStringQuery)                      // provider is working on this day of the week
             .where('neighborhood_id', neighborhoodId)      // appropriate neighborhood
             .where('first_date_active', '<=', date)        // is active
             .where(function() {                            // and not (yet?) expired
               this.whereNull('last_date_active')           // non-expiring scheduled
                   .orWhere('last_date_active', '>=', date) // or it expires in the future
             })
             .whereRaw(timeQueryStr);                       // begins_at_time <= time <= ends_at_time
    }),
  });
};
