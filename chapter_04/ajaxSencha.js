Ext.onReady(function () {
  Ext.Ajax.request({
    url: 'sample.json',

    success: function (response, opts) {
      var obj = Ext.decode(response.responseText);
      console.dir(obj);
    },

    failure: function (response, opts) {
      console.log('server-side failure with status code ' + response.status);
    }
  });

  Ext.Ajax.setTimeout(120000);
  Ext.Ajax.request({
    url: 'page.aspx',
    timeout: 600000
  });
});
