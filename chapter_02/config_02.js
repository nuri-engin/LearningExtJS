// All about statics
Ext.define('Myapp.sample.Employee', {
  statics: {
    instanceCount: 0,
    payrollId: 1000,
    nextId: function () {
      return (this.payrollId + this.instanceCount);
    }
  },
  config: {
    name: 'Unknow',
    lastName: 'Unknow',
    age: 0,
    isOld: false,
    payrollNumber: 0
  },
  constructor: function (config) {
    this.initConfig(config);
    this.setPayrollNumber (this.statics().nextId());
    this.self.instanceCount ++;
  },
  work: function (task) {
    console.log(this.name + ' is working on: ' + task);
  },
  applyAge: function (newAge) {
    this.setIsOld((newAge >= 90));
    return newAge;
  },
  getTotalEmployees: function () {
    return this.statics().instanceCount;
  }
});

var patricia = Ext.create('Myapp.sample.Employee', {
name: 'Patricia',
lastName: 'Diaz',
age: 21,
isOld: false
});
console.log("Patricia payrollId: " + patricia.getPayrollNumber());
console.log("Total employees: " + patricia.getTotalEmployees());

var peter = Ext.create('Myapp.sample.Employee', {
  name: 'Peter',
  lastName: 'Pan',
  age: 16,
  isOld: false
});
console.log("Peter payrollId: " + peter.getPayrollNumber());
console.log("Total employees: " + peter.getTotalEmployees());

console.log("Instance(s) of employee class: " + Myapp.sample.Employee.instanceCount);
