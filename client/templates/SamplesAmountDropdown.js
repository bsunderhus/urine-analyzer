Template.SamplesAmountDropdown.helpers({
  items(){
    return Session.get('SamplesOptions');
  }
});
Template.SamplesAmountDropdown.events({
  "click .item": function(event, template){
    let value = this.valueOf();
    let selector = {'option':template.data.option,'_id':template.data._id}
    let modifier = {'data.item':value}
    Meteor.call("updateOptions", selector,modifier);
  }
});

Template.SamplesAmountDropdown.onRendered(function(){
  this.$('.dropdown').dropdown({
    action:'hide'
  });
});