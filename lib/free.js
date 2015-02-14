var Promise = require('bluebird');
var Moment = require('moment');
var orm = require('./db');

// returns all possible availabilities for
// a service within a week of now (or a specified date)

return orm.then(function(models) {

  var ServiceProvider = models.collections.serviceprovider;

  return {
    free: function free(service, afterDate) {
      // returns an array of datetimes that represent
      // available appointments across all stylists
      // as well as how many appointments they have
      // booked for the day and week

      var _date = afterDate || new Date();
      var rightNow = moment(_date).toISOString();
      var oneWeekFromNow = moment(_date).add(7, 'days').endOf('day').toISOString();

      return ServiceProvider.find()
        .populate('services', { id: service.id })
        .where({ beginsAt: { '>=': rightNow }})
        .where({ endsAt: { '<=': oneWeekFromNow })
        .sort('beginsAt');
      }
    };
  }

});
