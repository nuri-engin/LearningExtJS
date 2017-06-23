Ext.Loader.setConfig({
  enabled: true,
  paths: { Myapp: 'appcode' }
});

Ext.require ([
  'Ext.form.*',
  'Ext.toolbar.*',
  'Ext.button.*',
  'Myapp.view.CustomerForm01'
]);

Ext.onReady(function () {

  var myPanel = Ext.create('Myapp.view.CustomerForm01', {
    title: 'My first customer form',
    renderTo: Ext.getBody()
  });
  console.log('OK');
});
