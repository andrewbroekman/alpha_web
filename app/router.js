import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.route('home',{path: '/'});
	this.route('persons');
	this.route('navexample');
	this.route('researchGroup', function() {
		this.route('suspendResearchGroup');
		this.route('reactivateResearchGroup');
		this.route('addResearchGroup');
	});
});

export default Router;
