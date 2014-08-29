/**
* Templates
*/
Template.messages.messages = function() {
  return Messages.find({}, {sort: {time: -1}});
};

/**
Notes:
------

    Let’s break down this abit. Template.messages.messages refers to Template.<template-name>.<template-variable>. In our case we will return all documents from MongoDB and sort them on the time attribute.

*/
