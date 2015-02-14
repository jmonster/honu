var DATABASE_URL      = 'postgres://afvdtixvsstjbr:kQbVK8FEScbGOHgPX94eJPj0J2@ec2-54-204-47-70.compute-1.amazonaws.com:5432/d6mdld57enjhun';
var PostgresqlAdapter = require('sails-postgresql');
var Waterline         = require('waterline');
var Promise           = require('bluebird');

// Instantiate a new instance of the ORM
var orm = new Waterline();

var config = {
  adapters: { 'postgresql': PostgresqlAdapter },
  connections: {
    'elephant': {
      adapter: 'postgresql',
      url: DATABASE_URL,
      pool: false,
      ssl: true
    }
  }
};

orm.loadCollection(require('../models/appointment'));
orm.loadCollection(require('../models/service'));
orm.loadCollection(require('../models/service-provider'));
orm.loadCollection(require('../models/on-call'));

module.exports = new Promise(function(resolve,reject) {
  return orm.initialize(config, function(err, models) {
    if (err) { console.log('err..'); return reject(err); }
    else     { console.log('suc'); return resolve(models); }
  });
});
