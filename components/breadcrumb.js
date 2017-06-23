Ext.define('Myapp.sample.store.mainMenu', {
    extend: 'Ext.data.TreeStore',
    root: {
      text: 'Myapp',
      expanded: true,
      children: [{
        text: 'Modules',
        expanded: true,
        children: [
          {leaf: true, text: 'Employees'},
          {leaf: true, text: 'Customers'},
          {leaf: true, text: 'Products'}
        ]
      }, {
        text: 'Market',
        expanded: true,
        children: [
          {leaf: true, text: 'Sales'},
          {leaf: true, text: 'Budgets'},
          {leaf: true, text: 'SEO'},
          {leaf: true, text: 'Statics'}
        ]
      }, {
        text: 'Support',
        iconCls: 'help-16',
        children: [
          {leaf: true, text: 'Submit a Ticket'},
          {leaf: true, text: 'Forum'},
          {leaf: true, text: 'Visit our web'}
        ]
      },
      {leaf: true, text: 'Reports'},
      {leaf: true, text: 'Charts'}
      ]
    }
});

var myMenuStore = Ext.create('Myapp.sample.store.mainMenu', {});
var myPanel = Ext.create('Ext.panel.Panel', {
  title: 'Breadcrumb bar....',
  width: 600,
  height: 200,
  dockedItems: [{
    xtype: 'breadcrumb',
    dock: 'top',
    store: myMenuStore,
    showIcons: true,
    selection: myMenuStore.getRoot().childNodes[2].childNodes[0],
    listeners: {
      'selectionchange': {
        fn: function (mybreadcrumb, node, eOpts) {
          var panel = mybreadcrumb.up('panel');
          panel.update('This is the zone for: <b>' + node.data.text + '</b>');
        },
        delay: 200
      }
    }
  }],
  renderTo: 'breadcrumb'
});
