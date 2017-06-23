Ext.define('Myapp.view.CustomerForm02', {
    extend: 'Ext.form.Panel',
    alias: 'widget.customerform02',
    requires: [
      'Ext.form.*',
      'Ext.toolbar.*',
      'Ext.button.Button'
    ],
    height: 280,
    width: 448,
    animCollapse: true,
    bodyPadding: 6,
    collapsible: false,
    header: true,
    title: 'Customer...',
    defaultType: 'textfield',
    defaults: {
      anchor: '-18',
      labelWidth: 90,
      labelAlign: 'right'
    },
    items: [
      {
        xtype: 'numberfield', fieldLabel: 'Customer ID', name: 'cust_id'
      }, {
        fieldLabel: 'Name', name: 'cust_name'
      }, {
        fieldLabel: 'Phone', name: 'cust_phone'
      }, {
        fieldLabel: 'Web site', name: 'cust_website'
      }, {
        xtype: 'datefield', fieldLabel: 'Client since',
        format: 'd-m-Y', submitFormat: 'Y-m-d', name: 'cust_since'
      }
    ],
    initComponent: function () {
      var me = this;
      me.dockedItems = [{
        xtype: 'toolbar',
        dock: 'bottom',
        items: [
          {
            xtype: 'tbfill'
          }, {
            xtype: 'button',
            iconCls: 'save-16',
            text: 'Save..',
            handler: function () {
              this.submitMyForm();
            },
            scope:this
          }
        ]
      }];
      Ext.applyIf(me, {});
      me.callParent(arguments);
    },
    submitMyForm:function () {
      var me = this;
      me.getForm().submit({
        url: 'serverside/submitaction.php',
        //method: 'POST',
        //cors: true,
        //useDefaultXhrHeader: false,
        success: function (form, action) {
          Ext.Msg.alert('Success', 'Successfully saved');
        },
        failure: function (form, action) {
          Ext.Msg.alert('Failure', 'Something is wrong');
        }
      });
    }
});
