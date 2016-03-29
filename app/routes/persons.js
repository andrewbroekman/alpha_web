import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return [
        {name: 'Marie', surname: 'Curie', email: 'mariecurie@loremipsum.com', organizations: [{name:'a'},{name:'b'}], researcherCategory: [{name:'Prof'},{name:'Student'}]},
        {name: 'Mae', surname: 'Jemison', email: 'mae@loremipsum.com', organizations: [{name:'a'},{name:'b'}], researcherCategory: [{name:'Prof'},{name:'Student'}]},
        {name: 'Albert', surname:'Hofmann', email: 'albert@loremipsum.com', organizations: [{name:'a'},{name:'b'}], researcherCategory: [{name:'Prof'},{name:'Student'}]}
        ];
    }
});