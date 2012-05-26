Ext.define('PinpointMyPals.view.pal.Show', {
    extend: 'Ext.Container',

    config: {
        layout: 'vbox',

        items: [{
            id: 'showPalContent',
            tpl: '{firstName} {lastName}',
            styleHtmlContent: true
        },{
            xtype: 'map',
            flex: 1,
            mapOptions: {
                zoomControl: false,
                panControl: false,
                rotateControl: false,
                streetViewControl: false,
                mapTypeControl: false
            }
        }],
        record: null
    },

    updateRecord: function(newRecord) {
        if (newRecord) {
            this.down('#showPalContent').setData(newRecord.data);
            this.config.title = [newRecord.get('firstName'), newRecord.get('lastName')].join(' ');
        }
    }
});