Ext.Loader.setConfig({
  enabled: true,
  paths: {
    Myapp: 'appcode'
  }
});

Ext.require([
  'Ext.form.*',
  'Ext.toolbar.*',
  'Ext.button.*',
  'Myapp.view.CustomerForm02'
]);

Ext.onReady(function () {
  var myPanel = Ext.create('Myapp.view.CustomerForm02', {
    title: 'Submiting my form',
    renderTo: Ext.getBody()
  });

});
