Ext.onReady(function () {

  Ext.Ajax.request ({
    url     : "parameters.php",
    method  : 'POST',
    params  : {
      x: 200,
      y: 300
    },
    timeout: 50000,
    success: function (response, options) {
      var data = Ext.decode(response.responseText);
      Ext.Msg.alert("Message", data.msg);
    },
    failure: function (response, options) {
      Ext.Msg.alert("Message", 'server-side failure with status code: ' + response.status);
      //Ext.Msg.alert("Messsage", 'server-side failure: ' + response.status);
    }
  });
});
