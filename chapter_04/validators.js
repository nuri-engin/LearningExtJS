
Ext.define('Myapp.model.Client', {
    extend: 'Ext.data.Model',
    idProperty: 'clientId',
    fields: [
     {name: 'clientId', type: 'int' },
     {name: 'name' , type: 'string'},
     {name: 'phone' , type: 'string'},
     {name: 'website' , type: 'string'},
     {name: 'status' , type: 'string'},
     {name: 'clientSince' , type: 'date', dateFormat: 'Y-m-d H:i'}
    ],
    validators: {
      name: [
        {type: 'presence'}
      ],
      website: [
        {type: 'presence', allowEmpty: true},
        {type: 'length', min: 5, max:250}
      ]
    }
});

var myClient = Ext.create('Myapp.model.Client', {
  clientId: 101,
  name: 'Hotech Company',
  phone: '521234 34533',
  website: 'hotech.system',
  status: 'Active',
  clientSince: '2010-01-01 14:32'
});

if (myClient.isValid()) {
  console.log("My client model is correct");
}

console.log(myClient);
console.log("My client's name is = " + myClient.data.name);
console.log("My client's website is = " + myClient.data.website);

// SET
myClient.set('name', '');
myClient.set('website', '');

if (myClient.isValid()) {
  console.log("My client model is correct");
} else {
  console.log("My client model has errors");
  var errors = myClient.validate();
  errors.each(function (error) {
    console.log(error.field, error.message);
  });
}
