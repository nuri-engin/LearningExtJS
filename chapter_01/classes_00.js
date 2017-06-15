Ext.onReady(function(){
 //alert("This is my first Extjs app !");
 Ext.Msg.alert("Alert", "This is my first Extjs app !");
 Ext.Msg.confirm("Confirm", "Do you like ExtJS 5?",
    function (btn) {
      if (btn === "yes") {
        Ext.Msg.alert("Great!", "This is great!");
      } else {
        Ext.Msg.alert("Really?", "That's too bad.");
      }
    });
});
