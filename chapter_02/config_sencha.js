Ext.define('My.own.Window', {
    extend: 'Ext.Component',
    /** @readonly */
    isWindow: true,

    config: {
      title: 'Title Here',

      bottomBar: {
        height: 50,
        resizeable: false
      }
    },

    applyTitle: function (title) {
      if (!Ext.isString(title) || title.length === 0) {
        alert('Error: Title must be a valid non-empty string');
      } else {
        return title;
      }
    },

    applyBottomBar: function (bottomBar) {
      if (bottomBar) {
        if (!this.bottomBar) {
          return Ext.create('My.own.WindowBottomBar', bottomBar);
        } else {
          this.bottomBar.setConfig(bottomBar);
        }
      }
    }
});

/** Child Component */
Ext.define('My.own.WindowBottomBar', {
    config: {
      height: undefined,
      resizeable: true
    }
});

// Usage for sample
var myWindow = Ext.create('My.own.Window', {
  title: 'Hello World',
  bottomBar: {
    height: 60
  }
});

alert(myWindow.getTitle());
myWindow.setTitle('Something New');
alert(myWindow.getTitle());
myWindow.setTitle(null);
myWindow.setBottomBar({ height: 100 });
alert(myWindow.getBottomBar().getHeight());
