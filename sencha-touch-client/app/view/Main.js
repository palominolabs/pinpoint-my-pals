Ext.define('PinpointMyPals.view.Main', {
    extend: 'Ext.navigation.View',

    id: 'mainView',

    requires: [
        'PinpointMyPals.view.pal.List'
    ],

    config: {
        autoDestroy: false,

        items: [{
            xclass: 'PinpointMyPals.view.pal.List'
        }]
    }
});
