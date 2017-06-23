Ext.define('Myapp.store.customers.Clients', {
    extend: 'Ext.data.BufferedStore',
    model: 'Myapp.model.Customer',
    autoLoad: true,
    leadingBufferZone: 150,
    pageSize: 100,
    proxy: {
      type: 'ajax',
      url: 'serverside/clients.php',
      reader: {
        type: 'json',
        rootProperty: 'records',
        totalProperty: 'total'
      }
    }
});
