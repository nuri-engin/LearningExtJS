Ext.define('Myapp.constants.CompanyConstants', {
    //requires: ['Myapp.model.Employee'],
    singleton: true,
    companyName: '"Hotech Software"',
    welcomeEmployee: function (employee) {
      return "Hello " + employee.getName() + ". You are now working for " + this.companyName;
    }
});
