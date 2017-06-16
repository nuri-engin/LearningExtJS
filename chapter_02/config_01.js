// Setters and Getters.
Ext.define('Ext.sample.Employee', {
    config: {
      name: 'Unknow',
      lastName: 'Unknow',
      age: 0,
      isOld: false
    },
    constructor: function (config) {
      this.initConfig(config);
    },
    work: function (task) {
    console.log(this._name + ' is working on: ' + task);
    },
    applyAge: function (newAge) {
      this.setIsOld((newAge >= 90));
      return newAge;
    }
});

var patricia = Ext.create('Ext.sample.Employee', {
  name: 'Patricia',
  lastName: 'Diaz',
  age: 21,
  isOld: false
});

console.log("employee Name: " + patricia.getName());
console.log("employee Last name: " + patricia.getLastName());
console.log("employee age: " + patricia.getAge());
patricia.work('Attending phone calls');

patricia.setName('Karla Patricia');
patricia.setLastName('Diaz de Leon');
patricia.setAge(25);
console.log("employee New Name: " + patricia.getName());
console.log("employee New Last name: " + patricia.getLastName());
console.log("employee New age: " + patricia.getAge());
patricia.work('Attending phone calls');
var is_old= '';
is_old = (patricia.getIsOld() == true) ? 'Yes' : 'No';
console.log("is Patricia old? " + is_old);
patricia.setAge(92);
is_old= '';
is_old = (patricia.getIsOld() == true) ? 'Yes' : 'No';
console.log("is Patricia old? " + is_old);
