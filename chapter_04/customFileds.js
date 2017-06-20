Ext.define('Myapp.fields.Status', {
    extend: 'Ext.data.field.String',
    alias: 'data.field.status',
    validators: {
      type: 'inclusion',
      list: ['Active', 'Inactive'],
      message: 'Is not a valid status value, please select the proper options [Active, Inactive]'
    }
});

Ext.define('Myapp.model.Client', {
    extend: 'Ext.data.Model',
    idProperty: 'clientId',
    fields: [
      {name: 'clientId', type: 'int'},
      {name: 'name', type: 'string'},
      {name: 'phone', type: 'string'},
      {name: 'website', type: 'string'},
      {name: 'status', type: 'status'},
      {name: 'clientSince', type: 'date', dateFormat: 'Y-m-d H:i'}
    ],
    validators: {

    }
});

var myClient = Ext.create('Myapp.model.Client', {
  clientId: '101',
  name: 'Acme Corp',
  phone: '4312 123 54',
  website: 'www.acme.com',
  status: 'Active',
  clientSince: '2010-01-02 12:32'
});

if (myClient.isValid()) {
  console.log("My client model is correct");
}

// Set
myClient.set('status', 'No longer client');
if (myClient.isValid()) {
  console.log("My client model is correct");
} else {
  console.log("My client model has errors");
  var errors = myClient.validate();
  errors.each(function (error) {
    console.log(error.field, error.message);
  });
}
