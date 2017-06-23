Ext.define('Myapp.model.CustomerWidgets', {
    extend: 'Ext.data.Model',
    idPropery: 'id',
    fields: [
      {name: 'id', type: 'int'},
      {name: 'name', type: 'string'},
      {name: 'progress', type: 'float'},
      {name: 'piesequence'}
    ]
});
