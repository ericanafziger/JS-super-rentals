import Ember from 'ember';

export default Ember.Component.extend({
  addAnnouncement: false,
  actions: {
    announcementFormShow() {
      this.set('addAnnouncement', true);
    },
    saveAnnouncement() {
      var params = {
        title: this.get('title') ? this.get('title') : '',
        date: this.get('date') ? this.get('date') : '',
        message: this.get('message') ? this.get('message') : ''
      };
      this.set('addAnnouncement', false);
      this.sendAction('saveAnnouncement', params);
      var inputs = document.getElementsByTagName("input");
      for (var i=0; i<inputs.length; i++){
        var attribute = Ember.$(inputs[i]).attr("id");
        this.set(attribute, "");
      }
    }
  }
});
