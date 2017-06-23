// Adjusments for writing to the data
Ext.Loader.setConfig({
  enabled: true,
  paths: { Myapp: 'appcode' }
});

Ext.require([
  'Ext.data.*',
  'Myapp.model.Contract',
  'Myapp.model.Customer',
  'Myapp.store.customers.Customers'
]);

Ext.onReady(function () {
  //Step 1
  var store = Ext.create('Myapp.store.customers.Customers');
    store.load({  // Step 2 load Store in order to get all records
      scope: this,
      callback: function (records, operation, success) {
        console.log('Loaded records ...');
        Ext.each(records, function(record, index, records) {
          console.log(record.get("name") + ' - ' + record.data.contractInfo.contractId);
        });
        var test = 11;
        console.log('Start adding model/record ...!');

        // step 3 Add a record
        var myNewCustomer = Ext.create('Myapp.model.Customer', {
          clientId: '103',
          name: 'American Notebooks Corp',
          phone: '52123212',
          website: 'www.note.com',
          status: 'Active',
          clientSince: '2015-06-02 10:34',
          contractInfo: {
            "id": 999,
            "contractId": "ct-0041",
            "documentType": "DOC"
          }
        });
        store.add(myNewCustomer);

        // step 4 update a record
        console.log('Updating model/record');
        var updateCustomerModel = store.getAt(0);
        updateCustomerModel.beginEdit();
        updateCustomerModel.set("website", "www.newadress.com");
        updateCustomerModel.set("phone", "+902121212");
        updateCustomerModel.endEdit();

        console.log('Deleting a model/record');
        var deleteCustomerModel = store.getAt(1);
        store.remove(deleteCustomerModel);
      }
    });
});


// Adjusments for retrieving the data via JSON and XML
/*
Ext.Loader.setConfig({
    enabled: true,
	paths:{
		Myapp:'appcode'
	}
});
Ext.require([
  'Ext.data.*',
  'Myapp.model.Contract',
  'Myapp.model.Customer',
  'Myapp.store.customers.Customers'
]);
Ext.onReady(function () {

  var store = Ext.create('Myapp.store.customers.Customers');
  store.load(function (records, operation, success) {
    console.log('Loaded Records...');
    Ext.each(records, function (record, index, records) {
      console.log(record.get("name") + ' - ' + record.data.contractInfo.contractId);
    });
  });
});
*/
