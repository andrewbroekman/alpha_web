import DS from 'ember-data';

export default DS.Model.extend({
   name: DS.attr(),
   surname: DS.attr(),
   email: DS.attr(),
   organizations: DS.attr(),
   researcherCategory: DS.attr()
});
