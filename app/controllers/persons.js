import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
	modalIsOpen: false,
    OpenModel: function(){
		this.set('modalIsOpen', true);
    },
	closeModal: function(){
		console.log("close");
    }
  }
});
