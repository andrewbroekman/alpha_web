import Ember from 'ember';

export default Ember.Route.extend({
	model() {
        var publications = this.store.findAll('publication'); // => GET /publications
        return publications;
    }
});
$(document).ready(function() {
    $('select').material_select();
  });