// If a stylist works a different schedule every single day
// then they would create a new OnCall record for each day.
// that they are working. This day would be stored as
// originDate. If this pattern repeats every week, then
// simply specify the curent Day of the Week as the only
// `daysActive` value.

var Waterline = require('waterline');
var OnCall = Waterline.Collection.extend({
  identity:  'oncall',
  connection:'elephant',

  attributes: {
    serviceprovider: {
      model: 'serviceprovider',
      required: true
    },

    firstDateActive: {
      type: 'datetime',
      required: true
    },

    lastDateActive: {
      type: 'datetime',
      required: false
    },

    beginsAtTime: {
      type: 'datetime',
      required: true,
      before: function() {
        return this.endsAtTime;
      }
    },

    endsAtTime: {
      type: 'datetime',
      required: true,
      after: function() {
        return this.beginsAtTime;
      }
    },

    // var days = {
    //   monday:    Math.pow(2,0),
    //   tuesday:   Math.pow(2,1),
    //   wednesday: Math.pow(2,2),
    //   thursday:  Math.pow(2,3),
    //   friday:    Math.pow(2,4),
    //   saturday:  Math.pow(2,5),
    //   sunday:    Math.pow(2,6)
    // }
    daysActive: {
      type: 'integer', // bitwise
      required: false
    },



   /**
   * Lifecycle Callbacks
   *
   * Run before and after various stages:
   *
   * beforeValidate
   * afterValidate
   * beforeUpdate
   * afterUpdate
   * beforeCreate
   * afterCreate
   * beforeDestroy
   * afterDestroy
   */

  daysWorking: function() {
    console.log('this: ',this);
  }

  }
});


module.exports = OnCall;




// var daysWorking = days.monday | days.tuesday | days.sunday;

// var amIWorkingSunday = daysWorking & days.sunday > 0;
