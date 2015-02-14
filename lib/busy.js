var Promise = require('bluebird');
var Moment = require('moment');
var orm = require('./db');

return orm.then(function(models) {

  var Appointment = models.collections.appointment;

  return {
    busy: function busy(service, afterDate) {
      // returns an array of datetimes that represent
      // available appointments across all stylists
      // as well as how many appointments they have
      // booked for the day and week

      var _date = afterDate || new Date();
      var rightNow = moment(_date).toISOString();
      var oneWeekFromNow = moment(_date).add(7, 'days').endOf('day').toISOString();

      return Appointment.find()
        .where({ service: service })
        .where({ beginsAt: { '>=': rightNow }})
        .where({ endsAt: { '<=': oneWeekFromNow })
        .sort('beginsAt');
      }
    };
  }

});
