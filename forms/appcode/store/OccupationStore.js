Ext.define('Myapp.store.occupationStore', {
    extend: 'Ext.data.Store',
    alias: 'store.occupation',
    fields: ['id', 'name'],
    autoLoad: true,
    proxy: {
      type: 'ajax',
      url: 'serverside/occupations.json',
      reader: {
        type: 'json',
        root: 'records'
      }
    }
});
