'use strict';

exports.seed = function(knex, Promise) {
  return knex('providers').insert({
  	first_name: 'johnny',
  	last_name: 'domino',
  	email: 'johnny@yayuhh.com',
  	phone_number: '+1.407.536.6466',
  	photo: 'http://some.where/foo.png',
  	bio: 'i yell ya h\'what',
  	rating: 499,
  	number_of_ratings: 3204
  });
};