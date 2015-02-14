var Waterline = require('waterline');
var Service = Waterline.Collection.extend({
  identity:  'service',
  connection:'elephant',

  attributes: {
    // title is a concise, human readable identifier for the service
    title: {
      type: 'string',
      required: true
    },

    // price is the cost *in cents* owed by the customer
    price: {
      type: 'integer',
      required: true
    },

    // durationInMinutes is how long it takes for a
    // service-provider to perform the service
    durationInMinutes: {
      type: 'integer',
      required: true
    },

    // travelLimitInMiles is how far a service-provider
    // will travel from their previous appointment
    // to handle the next one
    travelLimitInMiles: {
      type: 'integer'
    },

    // serviceStartsAt is the time of day that the service
    // starts being offered
    serviceStartsAt: {
      type: 'datetime',
      required: true
    },

    // serviceEndsAt is the time of day that the service
    // is no longer offered
    serviceEndsAt: {
      type: 'datetime',
      required: true
    },

    // first day is the date that the service becomes active/enabled
    firstDay: {
      type: 'date',
      required: true
    },

    // last day is the date that the service becomes inactive/disabled
    lastDay: {
      type: 'date',
      required: false
    },

    // a description is a human readable string that
    // explains the service's purpose
    description: {
      type: 'string'
    },

    // providers are people who perform the service
    providers: {
      collection: 'serviceprovider',
      via: 'services',
      dominant: true
    },

    // when a Service is disabled it is as if it doesn't exist
    // except that an Admin has the ability to re-enable it
    // which prevents them from having to recreate it
    disabled: {
      type: 'boolean',
      defaultsTo: false
    }
  }
});


module.exports = Service;
