var Waterline = require('waterline');
var Appointment = Waterline.Collection.extend({
  identity:  'appointment',
  connection:'elephant',

  attributes: {
    beginsAt: {
      type: 'datetime',
      required: true,
      before: function() {
        return this.endsAt;
      }
    },

    endsAt: {
      type: 'datetime',
      required: true,
      after: function() {
        return this.beginsAt;
      }
    },

    service: {
      model: 'service',
      required: true
    },

    serviceprovider: {
      model: 'serviceprovider',
      required: true
    }
  }
});


module.exports = Appointment;
