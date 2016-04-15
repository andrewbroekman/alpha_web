import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('nagivationComponent');
  this.route('navigationComponent');
  this.route('managePublication');
  this.route('manageMembership');
});




export default Router;
