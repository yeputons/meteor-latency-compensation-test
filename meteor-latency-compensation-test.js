Items = new Meteor.Collection('Items');

Meteor.methods({
  addItem: function(text) {
    var id = Items.insert({});
    console.log('id=' + id);
    Items.update(id, {});
  }
});

if (Meteor.isClient) {
  Deps.autorun(function() {
    console.log(new Date() + '; ' + Items.find({}).count());
  });
  Template.button.events({
    'click #button': function(ev) {
      Meteor.call('addItem');
    }
  });
}
