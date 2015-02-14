var Promise = require('bluebird');
var Moment = require('Moment');
var orm = require('./db');

var BASE_TIME = Moment(new Date(0)).utc();

return orm.then(function(models) {

  var models = models.collections;
  var connections = models.connections;

  var Service         = models.service;
  var ServiceProvider = models.serviceprovider;
  var Appointment     = models.appointment;
  var OnCall          = models.oncall;


  var days = {
    monday:    Math.pow(2,0),
    tuesday:   Math.pow(2,1),
    wednesday: Math.pow(2,2),
    thursday:  Math.pow(2,3),
    friday:    Math.pow(2,4),
    saturday:  Math.pow(2,5),
    sunday:    Math.pow(2,6)
  }

  // var daysWorking = days.monday | days.tuesday | days.sunday;
  // var amIWorkingSunday = daysWorking & days.sunday > 0;


  // transform startsAt/endsAt to be the same day
  // since calculations are only about `time`
  var services = require('./providers/glamsquad/services.json').map(function(s) {
    s.serviceStartsAt = Moment(new Date(s.serviceStartsAt)).year(BASE_TIME.year()).toDate();
    s.serviceStartsAt = Moment(new Date(s.serviceStartsAt)).dayOfYear(BASE_TIME.dayOfYear()).toDate();

    s.serviceEndsAt = Moment(new Date(s.serviceEndsAt)).year(BASE_TIME.year()).toDate();
    s.serviceEndsAt = Moment(new Date(s.serviceEndsAt)).dayOfYear(BASE_TIME.dayOfYear()).toDate();
    return s;
  });

  // Service.findOrCreate(['title', 'serviceStartsAt', 'serviceEndsAt'],services)
  //   .then(function(services) {
  //     console.log(services);
  //   });
  // });


  // ServiceProvider.create({
  //   firstName: 'Johnny',
  //   lastName: 'Domino',
  //   email: 'johnny@yayuhh.com',
  //   phoneNumber: '4075366466',
  //   bio: 'oyano',
  //   services: services
  // }).then(function(sp) {
  //   OnCall.create({
  //     serviceprovider: sp,
  //     firstDateActive: new Date(0),
  //     lastDateActive: new Date(5),
  //     beginsAtTime: new Date(0),
  //     endsAtTime: new Date(10000)
  //   })
  //   .then(function(onCall) {
  //     console.log('onCall: ',onCall);
  //     onCall.daysWorking();
  //   });
  // });



  // return {
  //   freeTimesForStylist: function freeTimesForStylist(stylist, timeWindow, service) {
  //     // return an array of datetimes that represent
  //     // available appointments for this stylist
  //     // as well as how many appointments they have
  //     // booked for the day and week
  //   },

  //   freeTimes: function freeTimes(service, afterDate) {
  //     // returns an array of datetimes that represent
  //     // available appointments across all stylists
  //     // as well as how many appointments they have
  //     // booked for the day and week

  //     var _date = afterDate || new Date();
  //     var rightNow = Moment(_date).toISOString();
  //     var oneWeekFromNow = Moment(_date).add(7, 'days').endOf('day').toISOString();

  //     return Appointment.find()
  //       .where({ service: service })
  //       .where({ beginsAt: { '>=': rightNow }})
  //       .where({ endsAt: { '<=': oneWeekFromNow }})
  //       .sort('beginsAt')
  //       .then(function(appointments) {
  //         // appointments represents all scheduled
  //         // so now remove these time slots from the
  //         // set of all possible time slots
  //       });
  //   }
  // };

});
