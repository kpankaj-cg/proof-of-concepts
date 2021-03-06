Ext.define('Packt.proxy.StaticData', {
    extend: 'Ext.data.proxy.Ajax',
    alias: 'proxy.staticdataproxy',

    type: 'ajax',
    
    reader: {
        type: 'json',
        messageProperty: 'msg',
        root: 'data'
    },

    writer: {
        type: 'json',
        writeAllFields: true,
        encode: true,
        allowSingle: false,
        root: 'data'
    },

    actionMethods: {
        create: "POST", 
        read: "POST", //changed to POST
        update: "POST", 
        destroy: "POST"
    },

    //baseUrl: 'php/staticData/',

    api: {
        read    : 'rest/staticData/list',
        create  : 'rest/staticData/create',
        update  : 'rest/staticData/update',
        destroy : 'rest/staticData/delete'
    },

    // constructor: function(cfg) {

    //     var me = this;

    //     if(me.url === undefined && !Ext.Object.getValues(me.api).length)
    //     {        
    //         me.api.read = 'php/staticData/list.php';
    //         me.api.create = 'php/staticData/create.php';
    //         me.api.update = 'php/staticData/update.php';
    //         me.api.destroy = 'php/staticData/delete.php';
    //     }

    //     me.callParent(arguments);
    // },

    listeners: {
        exception: function(proxy, response, operation){
            Ext.MessageBox.show({
                title: 'REMOTE EXCEPTION',
                msg: operation.getError(),
                icon: Ext.MessageBox.ERROR,
                buttons: Ext.Msg.OK
            });
        }
    }
});