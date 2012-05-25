Ext.define("PinpointMyPals.view.Landing", {
    extend: 'Ext.Container',

    requires: [],

    id: 'landing',

    config: {

        items: [{
            xtype: 'titlebar',
            docked: 'top',
            title: 'Pinpoint My Pals'
        },{
            xtype: 'button',
            text: 'Connect with Facebook',
            action: 'connectWithFacebook',
            centered: true
        }]
    }
});