Ext.define('Myapp.model.Employee', {
    extend: 'Ext.data.Model',
    idProperty: 'id',
    fields: [
      {name: 'id', type: 'int'},
      {name: 'clientid', type: 'int'},
      {name: 'name', type: 'string'},
      {name: 'phone', type: 'string'},
      {name: 'email', type: 'string'},
      {name: 'gender', type: 'string'}
    ]
});
