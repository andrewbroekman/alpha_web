import DS from 'ember-data';

export default DS.Model.extend({
   startDate: DS.attr(),
   endDate: DS.attr(),
   ResearchGroupAssociationType: DS.attr()
});
