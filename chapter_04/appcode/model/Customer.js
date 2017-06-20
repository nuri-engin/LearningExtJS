Ext.define('Myapp.model.Customer', {
    extend: 'Ext.data.Model',
    requires: ['Myapp.model.Contract'],
    idProperty: 'id',
    fields: [
      {name: 'id', type: 'int'},
      {name: 'name', type: 'string'},
      {name: 'phone', type: 'string'},
      {name: 'website', type: 'string'},
      {name: 'status', type: 'string'},
      {name: 'clientSince', type: 'date', dateFormat: 'Y-m-d H:i'},
      {name: 'contractInfo', reference: 'Contract', unique: true}
    ]
});
