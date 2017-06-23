// Toolbar
var myPanel = Ext.create('Ext.panel.Panel', {
  title: 'Toolbar',
  width: 550,
  height: 100,
  dockedItems: [{ //Step1
    xtype: 'toolbar',
    dock: 'top',
    items: [
      //{text: 'New record'},
      //{text: 'Edit record'},
      //{text: 'Remove record'},
      {text: 'New', iconCls: 'addicon-16'},
      {text: 'Edit', iconCls: 'editicon-16'},
      {text: 'Remove', iconCls: 'deleteicon-16'},
      {text: 'Export', iconCls: 'export-16'},
      {text: 'Print', iconCls: 'print-16'},
      {text: 'Help', iconCls: 'help-16'}
    ]
  }],
  renderTo: 'toolbar'
});

// Toolbar w/ Button group
var myPanel2 = Ext.create('Ext.panel.Panel', {
  title: 'Toolbar Btn-Grp',
  width: 550,
  height: 160,
  dockedItems: [{
    xtype: 'toolbar',
    dock: 'top',
    items: [{
      xtype: 'buttongroup',
      title: 'Actions',
      columns: 2,
      items: [
        {text: 'New', iconCls: 'addicon-32', scale:'large', rowspan:2, iconAlign: 'top'},
        {text: 'Edit', iconCls: 'editicon-16'},
        {text: 'Remove', iconCls: 'deleteicon-16'}
      ]
    }, {
        xtype: 'buttongroup',
        title: 'Print/Export & Help',
        defaults: {
          scale: 'large',
          iconAlign: 'top'
        },
        items: [
          {text: 'Export', iconCls: 'export-16'},
          {text: 'Print', iconCls: 'print-16'},
          {text: 'Help', iconCls: 'help-32', scale: 'large', iconAlign: 'bottom'}
        ]
      }
    ]
  }],
  renderTo: 'toolbar2'
});
