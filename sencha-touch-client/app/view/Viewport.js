Ext.define("PinpointMyPals.view.Viewport",{
    extend: 'Ext.Container',

    requires: [
        'PinpointMyPals.view.Landing',
        'PinpointMyPals.view.Main'
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
        },{
            xclass: 'PinpointMyPals.view.Main'
        }]
    }
});