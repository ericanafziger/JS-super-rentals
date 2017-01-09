import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('rental');
  },

  actions: {
    saveRental3(params) {
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      this.transitionTo('index');
    }
  }
});
//
// module.exports = {
//  name: 'my-addon',
//  included: function(/* app */) {
//    this._super.included.apply(this, arguments);
//  }
// };
