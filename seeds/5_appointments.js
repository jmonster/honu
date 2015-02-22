'use strict';

exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('appointments').insert({
      begins_at: '2015-02-24 16:00:00-05',
      ends_at: '2015-02-24 16:45:00-05',
      service_id: 1,
      provider_id: 1
    }),
    knex('appointments').insert({
      begins_at: '2015-03-05 14:00:00-05',
      ends_at: '2015-03-05 14:30:00-05',
      service_id: 2,
      provider_id: 2
    }),
    knex('appointments').insert({
      begins_at: '2015-04-02 15:00:00-05',
      ends_at: '2015-04-02 16:00:00-05',
      service_id: 3,
      provider_id: 3
    })
  ]);
};
