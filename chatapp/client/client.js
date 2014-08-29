/**
* Templates
*/
Template.messages.messages = function () {
  return Messages.find({}, {sort: {time: -1}});
};

Template.input.events = {
  'keydown input#message' : function (event) {
    if (event.which ==13) {// 13 is the enter key event
      var name = "Anonymous";
      var message = document.getElementById('message');

      if (message.value != "") {
        Messages.insert({
          name: name,
          message: message.value,
          time: Date.now(),
        });

        document.getElementById('message').value = '';
        message.value = '';
      }
    }
  }
};

/**
Notes:
------

Templates are functions:
-------------------------

    Let’s break down this abit. Template.messages.messages refers to Template.<template-name>.<template-variable>. In our case we will return all documents from MongoDB and sort them on the time attribute.

Template events:
-----------------

    Template.input.events is the callback for all events triggered withing the input template. In this case we’re listening to keydown input#message which means any time a key is pressed with in the input#message selector. The syntax for the events are event selector.

*/
