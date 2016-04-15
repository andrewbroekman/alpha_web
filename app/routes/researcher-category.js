import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        var people = this.store.findAll('researcher-category'); // => GET /person
        return people;
    }
});
