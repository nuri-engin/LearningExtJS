//  ---------- Class-A ---------->
// Main Class
Ext.define('Myapp.sample.Employee', {
    name: 'Unknown',
    lastName: 'Unknown',
    age: 0,
    constructor: function (config) {
      Ext.apply(this, config || {});
      console.log('Class A created - fullname ' + this.name + ' ' + this.lastName);
    },
    checkAge: function () {
      console.log('age of ' + this.name + ' ' + this.lastName + ' is. ' + this.age);
    },
    work: function (task) {
      console.log(this.name + ' is working on: ' + task);
    }
});

//  ---------- Mixins ---------->
// 1. Defining Tasks
Ext.define('Myapp.sample.tasks.attendPhone', {
    answerPhone: function () {
      console.log(this.name + ' is answering the phone');
    }
});
Ext.define('Myapp.sample.tasks.attendCellPhone', {
    extend: 'Ext.Mixin',
    /* answerCellPhone is the attached function for before and after
   and will execute the method defined in the answerCellPhone
   property on each configuration object (before / after)
   */
   mixinConfig: {
     before: {
       answerCellPhone: 'cellPhoneRinging'
     },
     after: {
       answerCellPhone: 'finishCall'
     }
   },
   cellPhoneRinging: function () {
     console.log('cell phone is ringing you may attend call');
   },
   finishCall: function () {
     console.log('cell phone call is over');
   }
});
Ext.define('Myapp.sample.tasks.attendClient', {
    attendClient: function (clientName) {
      console.log(this.name + ' is attend client: ' + clientName);
    }
});
Ext.define('Myapp.sample.tasks.attendMeetting', {
    attendMeetting: function (person) {
      console.log(this.name + ' is attending a meeting with ' + person);
    }
});
Ext.define('Myapp.sample.tasks.superviseEmployees', {
    superviseEmployees: function (supervisor, employee) {
      console.log(supervisor.name + ' is supervising: ' + employee.name + ' ' + employee.lastName);
    }
});

// 2. Defining Occupation
Ext.define('Myapp.sample.Secretary', {
    extend: 'Myapp.sample.Employee',
    mixins: {
      answerPhone: 'Myapp.sample.tasks.attendPhone',
      util: 'Myapp.sample.tasks.attendCellPhone'
    },
    constructor: function (config) {
      Ext.apply(this, config || {}); //this.name = config.name;
      console.log('Secretary class created - fullname:' + this.name + ' ' + this.lastName);
    },
    answerCellPhone: function () {
      console.log(this.name + ' is answering the cellphone');
    }
});
Ext.define('Myapp.sample.Accountant', {
    extend: 'Myapp.sample.Employee',
    mixins: {
      attendClient: 'Myapp.sample.tasks.attendClient',
      attendMeetting: 'Myapp.sample.tasks.attendMeetting'
    },
    constructor: function (config) {
      Ext.apply(this, config || {});
      console.log('Account class created - fullname:' + this.name + ' ' + this.lastName);
    }
});
Ext.define('Myapp.sample.Manager', {
    extend: 'Myapp.sample.Employee',
    mixins: {
      attendClient: 'Myapp.sample.tasks.attendClient',
      attendMeetting: 'Myapp.sample.tasks.attendMeetting',
      supervisePersons: 'Myapp.sample.tasks.superviseEmployees'
    },
    constructor: function (config) {
      Ext.apply(this, config || {});
      console.log('Manager class created - fullname: ' + this.name + ' ' + this.lastName);
    },
    supervise: function (employee) {
      console.log(this.name + ' starts supervision');
      this.mixins.supervisePersons.superviseEmployees(this, employee);
      console.log(this.name + ' finished supervision');
    }
});

// 3. Usage of 'Occupation' classes
var patricia = Ext.create('Myapp.sample.Secretary', {
  name: 'Patricia', lastName: 'Diaz', age: 21
});
patricia.work('Attending phone calls');
patricia.answerPhone();
patricia.util;

var peter = Ext.create('Myapp.sample.Accountant', {
  name: 'Peter', lastName: 'Jones', age: 44
});
peter.work('Checking financial books');
peter.attendClient('ACME Corp.');
peter.attendMeetting('Patricia');

var robert = Ext.create('Myapp.sample.Manager', {
  name: 'Robert', lastName: 'Smith', age: 34
});
robert.work('Administration of the office');
robert.attendClient('Iron Tubes of America');
robert.attendMeetting('Patricia & Peter');
robert.supervise(patricia);
robert.supervise(peter);
