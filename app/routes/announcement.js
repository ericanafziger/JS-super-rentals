import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('announcement');
  },

  actions: {
    saveAnnouncement(params) {
      var newAnnouncement = this.store.createRecord('announcement', params);
      newAnnouncement.save();
      this.transitionTo('announcement');
    },
    destroyAnnouncement(announcement) {
      if (confirm("Are you sure you want to delete this announcement?")) {
        announcement.destroyRecord();  
      }
      this.transitionTo('announcement');
    }
  }
});
