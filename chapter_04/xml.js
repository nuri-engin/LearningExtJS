Ext.onReady(function () {
  Ext.Ajax.request({
   url: "data.xml",
   success: function(response,options){
     var data = response.responseXML;
     var node = xml.getElementsByTagName('msg')[0];
     Ext.Msg.alert("Message", node.firstChild.data );
   },
   failure: function(response,options){
     Ext.Msg.alert("Message", 'server-side failure with status code' + response.status);
   }
  });
});
