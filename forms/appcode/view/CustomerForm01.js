Ext.define('Myapp.view.CustomerForm01', {
    extend: 'Ext.form.Panel',
    alias: 'widget.customerform01',
    height: 280,
    width: 448,
    bodyPadding: 6,
    defaultType: 'textfield',
    defaults: {
      anchor:'-18',
      labelWidth: 90,
      labelAlign: 'right'
    },
    title: 'Customer (...)',
    items: [{
      xtype: 'numberfield',
      fieldLabel: 'Customer ID'
    }, {
      fieldLabel: 'Name'
    }, {
      fieldLabel: 'Phone'
    }, {
      fieldLabel: 'Web Site'
    }, {
      xtype: 'datefield',
      fieldLabel: 'Client Since'
    }, {
      xtype: 'combobox',
      fieldLabel: 'Status'
    }],
    dockedItems: [{
      xtype: 'toolbar',
      dock: 'bottom',
      items: [{
        xtype: 'tbfill'
      }, {
        xtype: 'button',
        iconCls: 'save-16',
        text: 'Save...'
      }]
    }, {
      xtype: 'toolbar',
      dock: 'top',
      items: [{
        xtype: 'button',
        iconCls: 'addicon-16',
        text: 'New'
      }, {
        xtype: 'button',
        iconCls: 'editicon-16',
        text: 'Edit'
      }, {
        xtype: 'tbfill'
      }, {
        xtype: 'button',
        iconCls: 'deleteicon-16',
        text: '<b>Delete</b>'
      }]
    }]
});
