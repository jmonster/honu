'use strict';

exports.seed = function(knex, Promise) {
  return Promise.all([
      knex('providers_services').insert({
        provider_id: 1,
        service_id: 1
      }),

      knex('providers_services').insert({
        provider_id: 2,
        service_id: 2
      }),

      knex('providers_services').insert({
        provider_id: 3,
        service_id: 3
      })
    ]);
};
