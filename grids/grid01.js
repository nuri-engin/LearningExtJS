Ext.Loader.setConfig({
  enabled: true,
  paths: {Myapp: 'appcode'}
});

Ext.require([
  'Ext.tip.*',
  'Ext.grid.*',
	'Ext.selection.*',
	'Myapp.model.Contract',
	'Myapp.model.Customer',
	'Myapp.store.customers.Customers'
]);

Ext.onReady(function () {

  Ext.tip.QuickTipManager.init();

  var myEventsArea = Ext.create('Ext.form.field.TextArea', {
    itemId: 'myResultArea',
    width: 400,
    height: 100,
    renderTo: 'myResults'
  });

  var myGroupingFeature = Ext.create('Ext.grid.feature.Grouping', {
    groupHeaderTpl: '{columnName}: {name} ({rows.length} Customer{[values.rows.length > 1 ? "s" : ""]})',
    hideGroupedHeader: false,
    startCollapsed: false
  });

  var myGroupingSummaryFeature = Ext.create('Ext.grid.feature.GroupingSummary', {
    groupHeaderTpl: '{columnName}: {name}',
    hideGroupedHeader: true,
    startCollapsed: false
  });

  var myRowBodyFeature = Ext.create('Ext.grid.feature.RowBody', {
    getAdditionalData: function (data, index, record, orig) {
      return {
        rowBody: '<span style="padding-left: 10px"><b>Website: </b><a href="http://"' + record.data.website + '"target="_blank">' + record.data.website + '<a/></span>'
      };
    }
  });

  var mySummaryFeature = Ext.create('Ext.grid.feature.Summary', {
    dock: 'bottom'
  });

  var rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {
    clicksToMoveEditor: 1,
    autoCancel: false
  });

  var myStore = Ext.create('Myapp.store.customers.Customers');
  var myGrid = Ext.create('Ext.grid.Panel', {
    height: 500,
    width: 685,
    title: 'My Customers',
    columns: [{
      xtype: 'rownumberer',
      align: 'center'
    }, {
      xtype: 'numbercolumn',
      width: 100,
      dataIndex: 'id', //Model field name
      text: 'Id',
      format: '0', //0,000.00
      summaryType: 'count',
      summaryRenderer: function (value) {
        return Ext.String.format('Total: {0} customer{1}', value, value !== 1 ? 's': '');
      }
    }, {
      xtype: 'templatecolumn',
      width: 90,
      text: 'Country',
      tpl: '<div> <div class="flag_{[values.country.toLowerCase()]}">&nbsp</div> &nbsp;&nbsp;{country}</div>'
    }, {
      xtype: 'gridcolumn',
      width: 170,
      dataIndex: 'name',
      text: 'Customer Name',
      renderer: function (value, metaData, record, rowIndex, colIndex, store, view) {
        if (record.get('country') != 'USA') {
          metaData.tdCls = 'customer_foregin';
        }
        return value;
      },
      editor: {
        xtype: 'textfield',
        allowBlank: false,
        minLength: 4,
        //maxLength: 70
      }
    }, {
      width: 90,
      dataIndex: 'phone',
      text: 'Phone'
    }, {
      width: 90,
      dataIndex: 'website',
      text: 'Website',
      editRenderer: function (value) {
        return 'Cant edit!'
      }
    }, {
      xtype: 'numbercolumn',
      dataIndex: 'employees',
      width: 160,
      format: '0',
      text: 'Employees',
      summaryType: 'sum',
      summaryRenderer: function (value) {
        return Ext.String.format('Total: {0} employee{1}', value, value !== 1 ? 's': '');
      },
      editRenderer: function (value) {
        return 'Cant edit!'
      }
    }, {
      width: 70,
      dataIndex: 'status',
      text: 'Status',
      renderer: function (value, metaData, record, rowIndex, colIndex, store, view) {
        var myClass = 'cust_' + value.toLowerCase();
        metaData.tdCls = myClass;
        if (value.toLowerCase() == 'inactive') {
          metaData.tdStyle = " font-size:0.9em; ";
        } else if (value.toLowerCase() == 'suspended') {
          metaData.tdStyle = "font size: 0.9em; ";
          metaData.tdAttr = 'bgcolor="ffc6c6"';
        }
        return value;
      }
    }, {
      xtype: 'datecolumn',
      width: 100,
      dataIndex: 'clientSince',
      text: 'Client Since',
      format: 'M-d-Y',
      renderer: function (value, metaData, record, rowIndex, colIndex, store, view) {
        if (value.getFullYear() < 2014) {
          metaData.tdStyle = " font-size: 0.9em; color: #666";
        }
        return Ext.util.Format.date(value, 'Y-M-d');
      },
      editor:{
        xtype: 'datefield',
        maxValue: new Date()
      }
    }, {
      xtype: 'booleancolumn',
      dataIndex: 'sendnews',
      width: 100,
      align: 'center',
      text: 'Send News?',
      falseText: 'No',
      trueText: 'Yes'
    }, {
      xtype: 'checkcolumn',
      dataIndex: 'sendnews',
      width: 100,
      text: 'Send News?'
    }, {
      xtype: 'actioncolumn',
      width: 90,
      text: 'Actions',
      items: [{
        iconCls: 'editicon-16',
        tooltip: 'Edit Customer',
        handler: function (grid, rowIndex, colIndex) {
          var mysm = grid.getSelectionModel();
          var selection = mysm.getSelection();
          var record = selection[0];
          alert('You are going to edit ' + record.get('name'));
        }
      }
      ]
      }
      /*[{
        getClass: function(v, meta, rec) {
          if (rec.get('sendnews')==0) {
            return 'sendmailblock-16';
          } else {
            return 'sendmail-16';
          }
        },
        getTip: function(v, meta, rec) {
          if (rec.get(' ')==0) {
            return 'Do not Send';
          } else {
            return 'Send Email for news...!';
          }
        },
        handler: function(grid, rowIndex, colIndex) {
          var rec= grid.getStore().getAt(rowIndex),
          action = (rec.get('sendnews')==0 ?'' : 'Send');
          if (action==''){
            Ext.Msg.alert('Alert..!', "you can't send news...!");
          } else {
            Ext.Msg.alert(action, action +' news to '+ rec.get('name'));
          }
        }
      }]*/

        /*{
          iconCls: 'editicon-16',
          tooltip: 'Edit Customer',
          handler: function (grid, rowIndex, colIndex) {
            var rec = grid.getStore().getAt(rowIndex);
            alert("Edit customer: " + rec.get('name'));
          }
        }, {
          iconCls: 'sendmail-16',
          tooltip: 'Send email to customer',
          handler: function (grid, rowIndex, conIndex) {
            var rec = grid.getStore().getAt(rowIndex);
            alert('Send email to: ' + rec.get('name'));
          }
        }

    }],*/
    ],
    //features: [myGroupingFeature, myRowBodyFeature],
    listeners: {
      render: {
        fn: function (grid, eOpts) {
          var myResult = Ext.ComponentQuery.query('#myResultArea')[0];
          var currentText = '\n' + myResult.getValue();
          myResult.setValue('Grid has render' + currentText);
        }
      },
      select: {
        fn: function (grid, record, index, eOpts) {
          var myResult = Ext.ComponentQuery.query('#myResultArea')[0];
          var currentText = '\n' + myResult.getValue();
          myResult.setValue('Record #(' + (index + 1) + ') selected' + currentText);
        }
      },
      itemclick: {
        fn: function (grid, record, item, index, ev, Opts) {
          var myResult = Ext.ComponentQuery.query('#myResultArea')[0];
          var currentText = '\n' + myResult.getValue();
          var myNewMsg = 'Item #' + (index+1) + "was clicked (customer id=" + record.data.id +")";
          myResult.setValue(myNewMsg + currentText);
        }
      },
      itemkeydown: {
        fn: function (grid, record, item, index, ev, eOpts) {
          var myResult = Ext.ComponentQuery.query('#myResultArea')[0];
          var currentText = '\n' + myResult.getValue();
          var myNewMsg = '';
          var myKey = ev.getKey();
          if (myKey === ev.DELETE) {
            myNewMsg = "Delete Record";
          } else if (myKey == ev.RETURN) {
            myNewMsg = "Edit customer #" + record.data.id + "";
          } else if ((myKey === ev.N && ev.shiftKey) || myKey === ev.F8)  {
            myNewMsg = "Add new record";
          } else if ((myKey === ev.D && ev.shiftKey)) {
            myNewMsg = "view detail of customer #" + record.data.id + "";
          } else if (myKey === ev.F9) {
            myNewMsg = "Other action...";
          } else {
            return;
          }
          myResult.setValue(myNewMsg + currentText);
        }
      }
    },
    store: myStore,
    selModel: {
      //selType: 'rowmodel'
      pruneRemoved: false
    },
    bbar: [{
      xtype: 'pagingtoolbar',
      store: myStore,
      displayInfo: true,
      displayMsg: 'Displaying customers {0} - {1} of {2}'
    }],
    features: [myGroupingSummaryFeature, mySummaryFeature],
    plugins: [rowEditing], //{ptype: 'cellediting', clicksToEdit: 2},
    renderTo: Ext.getBody()
  });
});
