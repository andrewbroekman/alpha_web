import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('navexample');
  this.route('researchGroup', function() {
    this.route('suspendResearchGroup');
    this.route('reactivateResearchGroup');
    this.route('addResearchGroup');
  });
  this.route('addpublication');
});

export default Router;
