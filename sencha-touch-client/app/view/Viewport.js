Ext.define("PinpointMyPals.view.Viewport",{
    extend: 'Ext.Container',

    requires: [
        'PinpointMyPals.view.Landing'
    ],

    id: 'viewport',

    config: {
        layout: {
            type: 'card',
            animation: {
                type: 'flip'
            }
        },
        fullscreen: true,
        items: [{
            xclass: 'PinpointMyPals.view.Landing'
        }]
    }
});