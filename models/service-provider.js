var Waterline = require('waterline');
var ServiceProvider = Waterline.Collection.extend({
  identity:  'serviceprovider',
  connection:'elephant',

  attributes: {
    firstName: {
      type: 'string',
      required: true
    },

    lastName: {
      type: 'string',
      required: true,
    },

    email: {
      type: 'email',
      required: true
    },

    phoneNumber: {
      type: 'string',
      required: true
    },

    photo: {
      type: 'string'
    },

    bio: {
      type: 'string'
    },

    appointments: {
      collection: 'appointment',
      via: 'serviceprovider'
    },

    services: {
      collection: 'service',
      via: 'providers'
    },

    rating: {
      type: 'integer'
      // rating is 1-3; store average as value*100
      // this enables us to do integer calculations
      // without losing prevision to 2 decimals
      //
      // calculated via `average += (newValue - average) / count`
    },

    numberOfRatings: {
      type: 'integer',
      defaultsTo: 0
    }

  }
});


module.exports = ServiceProvider;
