//Defining the Main Screen
Ext.define('Myapp.view.Viewport', {
    extend: 'Ext.container.Viewport',
    layout: 'fit',
    initComponent: function () {
      var me = this;
      me.items = [{
        xtype: 'panel',
        dockedItems: [
          {
            xtype: 'toolbar', dock: 'top',
            items: [{
              text: 'Home', iconCls: 'home-16',
              menu: [
                {text: 'Categories', iconCls: 'categories-16'},
                {text: 'Products', iconCls: 'products-16'},
                {text: 'Clients', iconCls: 'clients-16'},
                {text: 'Invoices', iconCls: 'invoices-16'}
              ]
            }, {
              text: 'Help', iconCls: 'help-16',
              menu: {
                xtype: 'menu',
                items: [
                  {xtype: 'menuitem', text: 'Submit a support ticket', iconCls: 'help-16'},
                  {xtype: 'menuitem', text: 'Forum', iconCls: 'help-16'},
                  {xtype: 'menuitem', text: 'About..', iconCls: 'help-16'}
                ]
              }
            },
            {xtype: 'tbfill'},
            {xtype: 'tbtext', text: 'User: Nuri Engin'}
            ]
          }, {
            xtype: 'toolbar', dock: 'bottom',
            items: [
              {xtype: 'tbtext', text:'<b>Status: </b>Connected'},
              {xtype: 'tbfill'},
              {text: '', iconCls: 'help-16'}
            ]
          }
        ]
      }];
      me.callParent();
    }
});

//Displaying the Main Screen
Ext.onReady(function(){
  Ext.create("Myapp.view.Viewport");
});
