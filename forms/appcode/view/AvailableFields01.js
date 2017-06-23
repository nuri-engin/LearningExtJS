Ext.define('Myapp.view.AvailableFields01', {
    extend: 'Ext.form.Panel',
    alias: 'widget.availablefields01',
    requires: ['Ext.form.*'],
    height: 750,
    width: 500,
    bodyPadding: 6,
    title: 'Available Fields',
    defaultType: 'textfield',
    defaults: {
      anchor: '-18',
      labelWidth: 100,
      labelAlign: 'right'
    },
    initComponent: function () {
      var me = this;
      var myItems = me.createFields();
      Ext.applyIf(me, {
        items: myItems
      });
      me.callParent(arguments);
    },
    createFields: function () {
      var newItems=[];

      //Fields
      var myTextField = Ext.create('Ext.form.field.Text', {
        fieldLabel: 'Name',
        name: 'firstname',
        enableKeyEvents: true,
        minLength: 4,
        minLengthText: 'Name is too short, at least {0} chars...!',
        maxLength: 25,
        maxLengthText: 'Name is too long, max length is {0} chars...!',
      });

      var myAgeField = Ext.create('Ext.form.field.Number', {
        fieldLabel: 'Age',
        name: 'age',
        minValue: 18,
        maxValue: 70,
        allowDecimals: false,
        hideTrigger: true
      });

      var myIncomeField = Ext.create('Ext.form.field.Number', {
        fieldLabel: 'Income',
        name: 'income',
        minValue: 0,
        allowDecimals: true,
        decimalPrecision: 2,
        negativeText: 'The income cannot be negative..!',
        msgTarget: 'side',
        step: 500
      });

      //Listener for 'myTextField'
      myTextField.on({
        keyup: {
          fn: function (thisField, evt, eOpts) {
            if (evt.getCharCode() === evt.ENTER) {
              if (thisField.getValue() != '') {
                Ext.Msg.alert('Alert', 'Welcome: ' + thisField.getValue());
              }
            }
          }
        }
      });

      //ComboBox items store
      var occupationStore = Ext.create('Ext.data.Store',{
  		  fields  : ['id','name'],
  		  autoLoad: true,
  		  proxy:{
    			type:'ajax' ,
    			url :'serverside/occupations.json',
    			reader:{
    				type:'json',
    				root:'records'
    			}
  		  }
		});

      var myFirstCombo = Ext.create('Ext.form.ComboBox', {
        //requires: ['Myapp.store.occupationStore'],
        fieldLabel: 'Occupation',
        name: 'occupation',
        store: occupationStore,
        queryMode: 'remote',
        displayField: 'name',
        valueField: 'id'
      });

      myFirstCombo.on('select', function(combo, records) {
        Ext.Msg.alert('Alert', records[0].get('name'));
      });


      //Zone Store items
      var zonesStore = Ext.create('Ext.data.Store', {
        fields: ['id', 'name'],
        data: [
          {id: 1, name: 'Zone A'},
          {id: 2, name: 'Zone B'},
          {id: 3, name: 'Zone C'},
          {id: 4, name: 'Zone D'},
          {id: 5, name: 'Zone E'},
        ]
      });

      var myFirstTag = Ext.create('Ext.form.field.Tag', {
        fieldLabel: 'Select zone',
        store: zonesStore,
        displayField: 'name',
        valueField: 'id',
        filterPickList: true,
        queryMode: 'local'
      });

      var dateField = Ext.create('Ext.form.field.Date', {
        fieldLabel: 'Birthday',
        name: 'birthday',
        format: 'd/m/Y',
        submitFormat: 'Y-m-d',
        altFormats: 'd-m-Y|d m Y|d.m.Y',
        disabledDates: ['31/12/2014', '01/01/2015'],
        //placeHolder: 'E.g.: 08/11/1988'
      });

      var mySingleCheckbox = Ext.create('Ext.form.field.Checkbox', {
        fieldLabel: ' ',
        labelSeparator: ' ',
        boxLabel: 'employee has hobbies?',
        name: 'hobbies'
      });

      var groupCheckBoxes = Ext.create('Ext.form.CheckboxGroup', {
        fieldLabel: 'Hobbies',
        columns: 2,
        items: [
          {name: 'Hobby', boxLabel: 'Videogames', inputValue: 'vg'},
          {name: 'Hobby', boxLabel: 'Sports', inputValue: 'sp'},
          {name: 'Hobby', boxLabel: 'Card games', inputValue: 'cg'},
          {name: 'Hobby', boxLabel: 'Movies', inputValue: 'mv'},
          {name: 'Hobby', boxLabel: 'Toys', inputValue: 'ty'},
          {name: 'Hobby', boxLabel:'Music',inputValue: 'ms'},
          {name: 'Hobby', boxLabel:'Others...',inputValue: 'ot'}
        ]
      });

      var radioYes = Ext.create('Ext.form.field.Radio', {
        name: 'option',
        fieldLabel: 'Employee has a car?',
        labelSeparator: '',
        boxLabel: 'Yes',
        inputValue: true
      });
      var radioNo = Ext.create('Ext.form.field.Radio', {
        name: 'option',
        hideLabel: true,
        boxLabel: 'No',
        inputValue: false
      });

      var radioGroup = {
        xtype: 'radiogroup',
        fieldLabel: 'Employee Level',
        columns: 2,
        vertical: true,
        items: [
          {boxLabel: 'Beginner', name: 'rb', inputValue: '1'},
          {boxLabel: 'Intermediate', name: 'rb', inputValue: '2'},
          {boxLabel: 'Advanced', name: 'rb', inputValue: '3', checked: true
        }, {
          boxLabel: 'Ninja', name: 'rb', inputValue: 4}
        ]};

      var myFieldContainer = {
        xtype: 'fieldcontainer',
        height: '',
        fieldLabel: 'Shoes/Dress size',
        layout: {type: 'hbox'},
        items: [{
            xtype: 'numberfield',
            flex: 1,
            fieldLabel: ''
            //hideLabel: true
          }, {
            xtype: 'splitter'
          }, {
            xtype: 'combobox',
            flex: 1,
            hideLabel: true,
            labelWidth: 10,
            store: Ext.create('Ext.data.Store', {
              fields: ['id', 'name'],
              data: [
                {id: 1, name: 'small'},
                {id: 2, name: 'medium'},
                {id: 3, name: 'large'},
                {id: 4, name: 'XL'},
                {id: 5, name: 'XXL'}
              ]
            }),
            queryMode: 'local',
            displayField: 'name',
            valueField: 'id'
          }
        ]
      };

      var myTriggers = Ext.create('Ext.form.field.Text', {
        fieldLabel: 'My Field with triggers',
        triggers: {
          searchText: {
            cls: 'x-form-search-trigger',
            handler: function () {
              Ext.Msg.alert('Alert', 'Trigger search was clicked');
              this.setValue('searching text...');
            }
          },
          cleartext: {
            cls: 'x-form-clear-trigger',
            handler: function () {
              Ext.Msg.alert('Alert', 'Trigger clear was clicked');
              this.setValue('');
            }
          }
        }
      });

      newItems.push(myTextField);
      newItems.push(myAgeField);
      newItems.push(myIncomeField);
      newItems.push(myFirstCombo);
      newItems.push(myFirstTag);
      newItems.push(dateField);
      newItems.push(mySingleCheckbox);
      newItems.push(groupCheckBoxes);
      newItems.push(radioYes, radioNo);
      newItems.push(radioGroup);
      newItems.push(myFieldContainer);
      newItems.push(myTriggers);
      return newItems;
    }
});
