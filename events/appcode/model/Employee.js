Ext.define('Myapp.model.Employee', {
    extend: 'Ext.data.Model',
    mixins: {
      observable: 'Ext.util.Observable'
    },
    //requiers: ['Myapp.constants.CompanyConstants'],
    config: {
      name: 'Unknow',
      lastName: 'Unknow',
    },
    constructor: function (config) {
      this.initConfig(config),
      this.mixins.observable.constructor.call(this, config);
    },
    quitJob: function () {
      this.fireEvent('quit', this.getName(), new Date(), "A", "B", 'more params...');
    }
});
