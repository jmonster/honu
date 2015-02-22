'use strict';

exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('services').insert({
      title: 'blowout!',
      price: 2999,
      duration_in_minutes: 45,
      travel_limit_in_miles: 10,
      service_starts_at: '09:00-05:00',
      service_ends_at: '17:00-05:00',
      first_day_offered: '2015-01-01',
      last_day_offered: '2015-04-01',
      description: 'a little bit of dis, a little bit of dat'
    }),

    knex('services').insert({
      title: 'impress@work',
      price: 1999,
      duration_in_minutes: 30,
      travel_limit_in_miles: 5,
      service_starts_at: '05:00-05:00',
      service_ends_at: '10:00-05:00',
      first_day_offered: '2015-01-01',
      last_day_offered: '2015-12-31',
      description: 'show the boss who\'s boss!'
    }),

    knex('services').insert({
      title: 'manicures',
      price: 4999,
      duration_in_minutes: 60,
      travel_limit_in_miles: 8,
      service_starts_at: '11:00-05:00',
      service_ends_at: '20:00-05:00',
      first_day_offered: '2015-01-01',
      last_day_offered: '2015-03-31',
      description: 'finger bang -- bang, bang!'
    }),
  ]);
};
