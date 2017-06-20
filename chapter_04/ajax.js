Ext.onReady(function () {
  Ext.Ajax.request ({
    url: "data.json",
    success: function (response, options) {
    },
    failure: function (response, options) {
      Ext.Msg.alert("Message", 'Server-side failure with status code: ' + response.status);
    },
    callback: function (options, success, response) {
      if (success) {
        var data = Ext.decode(response.responseText);
        Ext.Msg.alert("Message", data.msg);
      }
    }
  });
});
