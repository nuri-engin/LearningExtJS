Ext.Loader.setConfig({
  enabled: true,
  paths: {Myapp: 'appcode'}
});

Ext.require([
  'Ext.*',
  'Myapp.model.Customer',
  'Myapp.store.customers.Clients'
]);

Ext.onReady(function () {

  Ext.tip.QuickTipManager.init();
  var myStore = Ext.create('Myapp.store.customers.Clients');
  var myGrid = Ext.create('Ext.grid.Panel', {
    height: 250, width: 550, title: 'My Clients (buffered)',
    columns: [{
      xtype: 'rownumberer',
      width: 50
    }, {
      xtype: 'numbercolumn',
      width: 100, dataIndex: 'id', text: 'Id', format: 0
    }, {
      width: 200,
      dataIndex: 'name',
      text: 'name'
    }, {
      width: 200,
      dataIndex: 'lastname',
      text: 'Last Name'
    }],
    store: myStore,
    loadMask: true,
    selModel: {
      pruneRemoved: false
    },
    renderTo: 'myGrid'
  });
});
