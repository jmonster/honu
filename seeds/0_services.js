'use strict';

exports.seed = function(knex, Promise) {
  return knex('services').insert({
    title: 'blowout!',
    price: 2999,
    duration_in_minutes: 45,
    travel_limit_in_miles: 10,
    service_starts_at: '09:00-05:00',
    service_ends_at: '17:00-05:00',
    first_day_offered: '2015-01-01',
    last_day_offered: '2015-04-01',
    description: 'a little bit of dis, a little bit of dat'
  });
};
