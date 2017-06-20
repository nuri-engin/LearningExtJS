Ext.define('Myapp.model.Client', {
    extend: 'Ext.data.Model',
    requires: ['Myapp.model.Employee'],
    idProperty: 'id',
    fields: [
      {name: 'id', type: 'int'},
  		{name: 'name'    , type: 'string'},
  		{name: 'phone'   , type: 'string'},
  		{name: 'website' , type: 'string'},
  		{name: 'status'  , type: 'string'},
  		{name: 'clientSince' , type: 'date', dateFormat: 'Y-m-d H:i'}
    ],
    hasMany: {
      model: 'Myapp.model.Employee',
      name: 'employees',
      associationKey: 'employees'
    }
});
