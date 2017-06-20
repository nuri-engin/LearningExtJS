Ext.Loader.setConfig({
  enabled: true,
  paths: {
    'Myapp': 'appcode'
  }
});

Ext.require([
  'Ext.data.*',
  'Myapp.model.Customer',
  'Myapp.store.Customers'
]);

Ext.onReady(function () {

  // Empty Store defining
  var store = Ext.create('Myapp.store.Customers', {

  });

  //Create new customer via Customer Model class
  // Add method 1
  var myNewCustomer = Ext.create('Myapp.model.Customer', {
    id: 101,
    name: 'Nuri',
    phone: '11 22 33',
    website: 'www.no.where',
    status: 'Active',
    clientSince: '2017-06-12 14:12',
    contractInfo: [
      {id: 01, contractId: 'C01-01', documentType: 'Excel'}
    ]
  });

  //Add the customer to Customer class
  store.add(myNewCustomer);
  console.log("Records in store: " + store.getCount());

  // Count to exist customers.
  console.log(store.count());

  console.log(myNewCustomer);

  // As well can add a new item by just sending an object
  // Method 2
  store.add({
    id: 102,
    name: 'Hotect',
    phone: '111 222',
    website: 'www.',
    status: 'Inactive',
    clientSince: '2011-06-12 09:12',
    contractInfo: {
      id: 4445,
      contractId: 'ct-12-2',
      documentType: 'DOCX'
    }
  });

  console.log("New records in store: " + store.getCount());

  store.each(function (record, index) {
    console.log("Those are: " + index, record.get("name"));
    console.log("documentType is: " + record.get("documentType"));
    console.log("Status is: " + record.get("status"));
  });

  // Retrieving specific records
  var modelTest = store.getAt(0);
  console.log(modelTest.get("name"));

  //Retrieve to a list of records
  var list = store.getRange(0,1);
  Ext.each(list,function (record, index) {
    console.log(index, record.get("name"));
  });

  var record = store.getById(102);
  console.log(record.get("name"));

  store.remove(record);
  store.each(function (record, index) {
    console.log(index, record.get("name"));
  })
});
