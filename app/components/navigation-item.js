import Ember from 'ember';

export default Ember.Component.extend({
    active: Ember.computed(function() {
        return (this.itemname.toUpperCase()==this.pageTitle.toUpperCase());
    })
});