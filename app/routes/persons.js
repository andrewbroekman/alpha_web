import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        var people = this.store.findAll('person'); // => GET /person
        return people;
    }
});