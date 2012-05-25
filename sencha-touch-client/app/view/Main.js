Ext.define('PinpointMyPals.view.Main', {
    extend: 'Ext.navigation.View',

    id: 'mainView',

    requires: [
        'PinpointMyPals.view.Pals'
    ],

    config: {
        autoDestroy: false,

        items: [{
            xclass: 'PinpointMyPals.view.Pals'
        }]
    }
});
