// Adjusments for writing to the data
Ext.define('Myapp.store.customers.Customers', {
    extend: 'Ext.data.Store',
    model: 'Myapp.model.Customer',
    autoLoad: false,
    autoSync: true,
    proxy: {
      type: 'ajax',
      url: 'serverside/customerData.json',
      api: {
        read: 'serverside/customerData.json',
        create: 'serverside/process.php?action=new',
        update: 'serverside/process.php?action=update',
        destroy: 'serverside/process.php?action.destroy'
      },
      reader: {
        type: 'json',
        rootProperty: 'records'
      },
      writer: {
        type: 'json',
        encode: true,
        rootProperty: 'paramProcess',
        allowSingle: false,
        writeAllFields: true,
        root: 'records'
      },
      actionMethods:{
  			create: 'POST',
  			read: 'GET',
  			update: 'POST',
  			destroy: 'POST'
		}
    }
});

// Adjusments for retrieving the data via JSON and XML
/*
Ext.define('Myapp.store.customers.Customers', {
    extend: 'Ext.data.Store',
    model: 'Myapp.model.Customer',
    proxy: {
      type: 'ajax',
      url: 'serverside/customerData.xml',
      reader: {
        type: 'xml',
        rootProperty: 'data',
        record: 'customer',
        totalProperty: 'total',
        successProperty: 'success'
      }
    }
});
*/

// Remote reader for JSON
/*
Ext.define('Myapp.store.customers.Customers', {
    extend: 'Ext.data.Store',
    model: 'Myapp.model.Customer',
    proxy: {
      type: 'ajax',
      url: 'serverside/customerData.json',
      reader: {
        type: 'json', rootProperty: 'output.customerRecords'
      }
    }
});
*/
