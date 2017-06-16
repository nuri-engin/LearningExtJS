Ext.define('Myapp.sample.Employee', {
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
      console.log(this.name + ' is working on: ' + task);
    },
    applyAge: function (newAge) {
      this.setIsOld((newAge >= 90));
      return newAge;
    }
});

// Singleton staff comes here
Ext.define('Myapp.CompanyConstants', {
  singleton: true,
  companyName: 'ExtJS Code Dev Corp.',
  workingDays: 'Monday to Friday',
  website: 'www.blabla.com',
  welcomeEmployee: function (employee) {
    "Hello " + employee.getName() + ", you are now working for " + this.companyName;
  }
});
console.log(Myapp.CompanyConstants.companyName);

// Instances...
var patricia = Ext.create('Myapp.sample.Employee', {
  name: 'Patricia',
  lastName: 'Diaz',
  age: 21,
  isOld: false
});

console.log(Myapp.CompanyConstants.welcomeEmployee(patricia));
console.log(patricia.getName());
