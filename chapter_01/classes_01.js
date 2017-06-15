//  "Modul-A": Main Class ->
Ext.define('Myapp.sample.Employee', {
    name: 'Unknown',
    lastName: 'Unknown',
    age: 0,
    constructor: function (config) {
      Ext.apply(this, config || {} );
      console.log('Class A created - fullname: ' + this.name + ' ' + this.lastName);
    },
    checkAge: function () {
      console.log('age of ' + this.name + ' ' + this.lastName + ' is: ' + this.age);
    },
    work: function (task) {
      console.log(this.name + ' is working on: ' + task);
    }
});

// Instance var of "Modul-A" ->
var patricia = Ext.create('Myapp.sample.Employee', {
  name: 'Patricia',
  lastName: 'Diaz',
  age: 21
});
patricia.checkAge();
patricia.work('Attending phone calls');
