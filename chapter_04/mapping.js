Ext.define('Myapp.model.Client', {
    extend: 'Ext.data.Model',
    idProperty: 'clientId',
    fields:[
      {name: 'clientId', type: 'int'},
      {name: 'name', type: 'string'},
      {phone: 'phone', type: 'string'},
      {name: 'contractFileName', type: 'string', mapping: 'x0001'}
    ]
});
