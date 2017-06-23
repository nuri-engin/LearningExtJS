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
  'Myapp.view.AvailableFields01'
  //'Myapp.store.occupationStore'
]);

Ext.onReady(function () {
  var myPanel = Ext.create('Myapp.view.AvailableFields01', {
    renderTo: Ext.getBody()
  });

});
