Ext.define('Myapp.store.customers.Customers', {
    extend: 'Ext.data.Store',
    model: 'Myapp.model.Customer',
    groupField: 'country',
    leadingBufferZone: 150,
    pageSize: 100,
    autoLoad: true,
    proxy: {
      type: 'ajax',
      url: 'serverside/customers.js',
      reader: {
        type: 'json',
        rootProperty: 'records',
        totalProperty: 'total'
      },
      actionMethods: {read: 'POST'}
    }
});
