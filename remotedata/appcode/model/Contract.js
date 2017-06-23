Ext.define('Myapp.model.Contract', {
    extend: 'Ext.data.Model',
    idPropery: 'id',
    fields: [
      {name: 'id', type: 'int'},
      {name: 'contractId', type: 'string'},
      {name: 'documentType', type: 'string'}
    ]
});
