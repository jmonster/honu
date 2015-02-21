'use strict';

exports.seed = function(knex, Promise) {
  return knex('oncalls').insert({
  	first_date_active: '2015-01-01',
  	last_date_active: '2015-04-01',
  	active_on_days: '0011111',
  	begins_at_time: '01:00-05:00',
  	ends_at_time: '04:00-05:00',
  	provider_id: 1,
  	service_id: 1,
  	neighborhood_id: 1
  });
};