import Ember from 'ember';

export default Ember.Route.extend({
	model() {
        return [
        {name: 'Computer Science'},
        {name: 'Artificial Intelligence'},
        {name: 'Swarm AI'},
        {name: 'Networking'}
        ];
    }
});
