'use strict';

exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('oncalls').insert({
      first_date_active: '2015-01-01',
      last_date_active: '2015-05-01',
      active_on_days: '0000011',
      begins_at_time: '09:00-05:00',
      ends_at_time: '17:00-05:00',
      provider_id: 1,
      service_id: 1,
      neighborhood_id: 1
    }),

    knex('oncalls').insert({
      first_date_active: '2015-01-01',
      last_date_active: '2015-07-01',
      active_on_days: '0011100',
      begins_at_time: '13:00-05:00',
      ends_at_time: '20:00-05:00',
      provider_id: 2,
      service_id: 2,
      neighborhood_id: 2
    }),

    knex('oncalls').insert({
      first_date_active: '2015-01-01',
      last_date_active: '2015-12-01',
      active_on_days: '1111100',
      begins_at_time: '10:00-05:00',
      ends_at_time: '18:00-05:00',
      provider_id: 3,
      service_id: 3,
      neighborhood_id: 3
    })
  ]);
};
