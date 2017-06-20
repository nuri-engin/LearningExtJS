Ext.onReady(function () {

  Ext.define('Myapp.model.Client', {
      extend: 'Ext.data.Model',
      idProperty: 'clientId',
      fields: [
        {name: 'clientId', type: 'int'},
        {name: 'name', type: 'string'},
        {name: 'phone', type: 'string'},
        {name: 'website', type: 'string'},
        {name: 'status', type: 'string'},
        {name: 'clientSince', type: 'date', dateFormat: 'Y-m-d H:i'}
      ],
      validators: {
        name: [
          {type: 'presence'}
        ],
        website: [
          {type: 'presence', allowEmpty: true},
          {type: 'length', min: 5, max:250}
        ]
      }
  });

  var clientOne = Ext.create('Myapp.model.Client', {
    clientId: 101,
    name: 'Client One',
    phone: '111 22 33',
    website: 'www.client.one',
    status: 'Active',
    clientSince: '2010-01-01 14:32'
  });
  console.log(clientOne);
  console.log("My client's name is = " + clientOne.data.name);
  console.log("My client's web site is = " + clientOne.data.name);

  // GET
  var nameClient = clientOne.get('name');
  var websiteClient = clientOne.get('website');
  console.log("[GET] My client's info: " + nameClient + " - " + websiteClient);

  // SET
  clientOne.set('phone', '222-11-33'); //Single value
  console.log("My client's new phone is: " + clientOne.get('phone'));

  clientOne.set({ //Multiple values
    name: 'Acme Corp',
    website: 'www.acme.com'
  });
  console.log("[SET] My client's name update to: " + clientOne.get('name'));
  console.log("[SET] As well website changed: " + clientOne.get('website'));

  var newClient = Ext.create('Myapp.model.Client', {
    clientId: 102,
    name: 'Hotech',
    phone: '23 123 543',
    website: 'www.acmecorp.com',
    status: 'Active',
    clientSince: '2010-02-12 10:10'
  });

  if (newClient.isValid()) {
    console.log('My client model is correct');
  }

  console.log(newClient);
  console.log("My client's name is: " + newClient.data.name);
  console.log("My client website is: " + newClient.data.website);
  //SET
  newClient.set('name', '');
  newClient.set('website', '');

  if (newClient.isValid()) {
    console.log("Client is correct");
  } else {
    console.log("Client model has errors");
    var errors = newClient.validate();
    errors.each(function (error) {
      console.log(error.field, error.message);
    });
  }
});
