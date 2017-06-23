Ext.Loader.setConfig({
  enabled: true,
  paths: {Myapp:'appcode'}
});

Ext.require([
  'Ext.data.*',
  'Myapp.model.Employee',
  'Myapp.constants.CompanyConstants'
]);

Ext.onReady(function () {
  var nuri = Ext.create('Myapp.model.Employee', {
    name: 'Nuri',
    lastName: 'Engin',
    listeners: {
      'quit': function (EmployeeName, quitDate, param, paramb, paramc) {
        console.log('Event quit launched');
        console.log('Employee: ' + EmployeeName);
        console.log('Date: ' + Ext.util.Format.date(quitDate, 'Y-m-d H:i'));
        console.log('Param: ' + param);
        console.log('Param: ' + paramb);
        console.log('Param: ' + paramc);
      }
    }
  });
  console.log(Myapp.constants.CompanyConstants.welcomeEmployee(nuri));
  console.log("------------------------------");
  nuri.quitJob();

  var smallButton = Ext.create('Ext.button.Button', {
    text: 'Small Button',
    iconCls: 'addicon-16',
    iconAlign: 'left',
    scale: 'small',
    renderTo: 'align'
  });

  var mediumButton = Ext.create('Ext.button.Button', {
    text: 'Medium Button',
    iconCls: 'addicon-24',
    iconAlign: 'top',
    scale: 'medium',
    renderTo: 'align'
  });

  var largeButton = Ext.create('Ext.button.Button', {
    text: 'Large Button',
    iconCls: 'addicon-32',
    iconAlign: 'right',
    scale: 'large',
    renderTo: 'align'
  });

  var mediumButtonTwo = Ext.create('Ext.button.Button', {
    text: 'Medium Button',
    iconCls: 'addicon-24',
    iconAlign: 'bottom',
    scale: 'medium',
    renderTo: 'align'
  });

  smallButton.on('click', function () {
    Ext.Msg.alert("Click event", "You clicked the small button!")
  });

  var mySegmentedButtons = Ext.create('Ext.button.Segmented', {
    renderTo: 'segmentedbuttons',
    vertical: true,
    items: [{
      xtype: 'button', text: '1st Button', iconCls: 'addicon-16'
    }, {
      text: '2nd Button', iconCls: 'addicon-16'
    }, {
      text: '3th Button', iconCls: 'addicon-16'
    }, {
      text: '4th Button', iconCls: 'addicon-16'
    }]
  });

  var menuButton = Ext.create('Ext.button.Button', {
    text: 'Add payment method..',
    iconCls: 'addicon-32',
    iconAlign: 'left',
    scale: 'large',
    renderTo: 'menu',
    menu: [
      {text: 'Master'},
      {text: 'Visa'},
      {text: 'Paypal'}
    ]
  });

  var menuItemA = Ext.create('Ext.menu.Item', {text: 'Master'});
  var menu = Ext.create('Ext.menu.Menu', {
    items: [
      menuItemA, //Variable
      Ext.create('Ext.menu.Item', {text: 'Visa'}), //constructor
      {text: 'Paypal'} //object config
    ]
  });

  var newMenuButton = Ext.create('Ext.button.Button', {
    text: 'Add payment method..',
    iconCls: 'addicon-24',
    iconAlign: 'left',
    scale: 'medium',
    renderTo: 'anormal',
    menu: menu
  });


});
