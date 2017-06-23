Ext.onReady(function () {

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

  varEventBtn = Ext.create('Ext.button.Button', {
    text: 'Payment Event',
    iconCls: 'add_24x24',
    iconAlign: 'right',
    scale: 'medium',
    renderTo: 'event',
    menu: [{
      text: 'Master',
      listeners: { //Option 1
        click: function () {
          Ext.Msg.alert("Click event", "Clicked 'Master'");
        }
      }
    }, {
      text: 'Visa',
      handler: onMenuItemClick // Option 2
    }, {
      text: 'Paypal',
      listeners: { //Option 3
        'click': {fn: onMenuItemClick, single:true}
      }
    }, {
      text: 'Other',
      handler: onMenuItemClick
    }]
  });

  function onMenuItemClick(itemBtn, Event) {
    var optionString = itemBtn.text;
    Ext.Msg.alert("Click event", "You selected " + optionString + " ..!");
  }


});
