import DS from 'ember-data';

export default DS.Model.extend({
   name: DS.attr(),
   date: DS.attr(),
   outputTarget: DS.attr()
});
