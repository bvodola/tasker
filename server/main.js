import { Meteor } from 'meteor/meteor';
import { Clients } from '../imports/api/clients.js';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.publish('clients', function () {
  return Clients.find();
});
