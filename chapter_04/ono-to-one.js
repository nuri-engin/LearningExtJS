Ext.Loader.setConfig({
  enabled: true,
  paths: {
    'Myapp': 'appcode'
  }
});

Ext.require([
  'Ext.data.*',
  'Myapp.model.Contract',
  'Myapp.model.Customer'
]);

Ext.onReady(function () {

  var myClient = Ext.create('Myapp.model.Customer', {
    id: 10001,
    name: 'Acme Corp',
    phone: '111 222 33',
    website: 'www.ww.www',
    status: 'Active',
    clientSince: '2010-10-01 14:32',
    contractInfo:{
      id: 444,
      contractId: 'ct-001-44',
      documentType: 'PDF'
    }
  });

  console.log(myClient);
});
