Ext.Loader.setConfig({
  enabled: true,
  paths: {Myapp: 'appcode'}
});

Ext.require([
  'Ext.tip.*',
	'Ext.sparkline.*',
  'Ext.grid.*',
	'Ext.ProgressBarWidget',
  'Ext.data.*',
  'Myapp.model.CustomerWidgets'
]);

Ext.onReady(function () {
  Ext.tip.QuickTipManager.init();

  var myStore = Ext.create('Ext.data.ArrayStore', {
    model: 'Myapp.model.CustomerWidgets',
    data: [
      [1001, "Acme Corp", 0.75, [30,14,20,36]],
      [1002, "Candy Store", 0.9, [50,14,20,16]],
      [1003, "Modern Cars", 0.35, [15,10,39,36]],
      [1004, "Extreme Sports", 0.174, [30,29,5,18]]
    ]
  });

  var myGrid = Ext.create('Ext.grid.Panel', {
    height: 250,
    width: 800,
    title: 'My Customers',
    columns: [{
      xtype: 'rownumberer',
      align: 'center'
    }, {
      xtype: 'numbercolumn',
      dataIndex: 'id',
      text: 'Id',
      format: '0'
    }, {
      width: 200,
      dataIndex: 'name',
      text: 'Customer Name'
    }, {
      xtype: 'widgetcolumn',
      text: 'Project Advances',
      dataIndex: 'progress',
      widget: {
        xtype: 'progressbarwidget',
        textTpl: [' <div style="font-size:0.9em;">{ percent:number("0")}% done.</div> ']
      }
    }, {
      xtype: 'widgetcolumn',
      text: 'Slider',
      width: 100,
      dataIndex: 'progress',
      widget: {
        xtype: 'sliderwidget',
        minValue: 0,
        maxValue: 1,
        decimalPrecision: 2,
        listeners: {
          change: function (slider, value) {
            if (slider.getWidgetRecord) {
              var rec = slider.getWidgetRecord();
              if (rec) {
                rec.set('progress', value);
              }
            }
          }
        }
      }
    }, {
      xtype: 'widgetcolumn',
      width: 100,
      align: 'center',
      dataIndex: 'piesequence',
      text: 'Pie Chart',
      widget: {xtype: 'sparklinepie'}
    }],
    store: myStore,
    renderTo: Ext.getBody()
  });
});
