//  ---------- Class-A ---------->
// Main Class
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

// Instance var of "Class-A" ->
var patricia = Ext.create('Myapp.sample.Employee', {
  name: 'Patricia',
  lastName: 'Diaz',
  age: 21
});
patricia.checkAge();
patricia.work('Attending phone calls');



// ---------- Class-B ---------->
// Instance class of "Class-A"
Ext.define('Myapp.sample.Supervisor', {
    extend: 'Myapp.sample.Employee',
    constructor: function (config) {
      Ext.apply(this, config || {});
      console.log('Class B created - fullname: ' + this.name + ' ' + this.lastName);
    },
    supervise: function (employee) {
      var employeefullname = employee.name + ' ' + employee.lastname;
      console.log(this.name + ' is supervising the work of ' + employeefullname);
    }
});

// Instance var of "Class-B" ->
var robert = Ext.create('Myapp.sample.Supervisor', {
  name: 'Robert',
  lastName: 'Smith',
  age: 34
});
robert.checkAge();
robert.work('Administration of the office');
robert.supervise(patricia);
