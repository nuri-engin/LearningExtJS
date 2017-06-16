// Defining Panel Class
Ext.define('Myapp.sample.EmployeePanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.employeePanel',
    alternateClassName: 'mycustomemployeepanel',
    title: 'Employee Panel',
    html: 'Employee content here..!'
});

// Creating Panel Class with Ext.create
Ext.onReady(function () {
  Ext.create('widget.employeePanel', {
    title: 'Employee Panel: Patricia Diaz ...',
    height: 250,
    width: 450,
    renderTo: Ext.getBody()
  });
});

/*
// Alternate way to create Panel with 'Ext.widget'
Ext.onReady(function () {
  Ext.widget('employeePanel', {
    //using the xtype which is employeePanel
    title: 'Employee Panel: Patricia Diaz (with Ext.widget)',
    height: 250,
    width: 450,
    renderTo: Ext.getBody()
  });
});

// Other ways to reference the 'EmployeePanel' class
Ext.ClassManager.instantiateByAlias("widget.employeePanel", {
  renderTo: Ext.getBody()
});

Ext.createByAlias("widget.employeePanel", {
  renderTo: Ext.getBody()
});

// Also can refer to class by using its xtype property on a configuration object.
var win = Ext.create("Ext.window.Window", {
  title: "Window", width: 250, height: 230,
  items: [{ xtype: "employeePanel" }]
});
win.show();
*/
