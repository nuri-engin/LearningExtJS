Ext.Loader.setConfig({
    enabled: true,
	paths:{
		Myapp:'appcode'
	}
});

Ext.require([
	'Ext.data.*',
	'Myapp.model.Employee',
	'Myapp.model.Client'
]);

Ext.onReady(function () {

  var myClient = Ext.create('Myapp.model.Client', {
    id: 101,
    name: 'Acme corp',
    phone: '521 123 21 21',
    website: 'www.www.www',
    status: 'Active',
    clientSince: '2010-01-01 14:32'
  });

  myClient.employees().add(
    {id: 102, clientId: 1002, name:'Juan Perez', phone: '1234 3112', email: 'juano@lo.com', gender: 'male'},
    {id: 103, clientId: 1003, name:'Sonia Sanchez', phone: '2222 3112', email: 'soniaoo@lo.com', gender: 'female'}
  );
  myClient.employees().each(function (record) {
    console.log(record.get('name') + ' - ' + record.get('email'));
  });
});
