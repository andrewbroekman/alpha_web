import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        var group = this.store.findAll('groupassociation'); // => GET /person
        return group;
    }
});