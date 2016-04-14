import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        var people = this.store.findAll('research-group'); // => GET /person
        return people;
    }
});
