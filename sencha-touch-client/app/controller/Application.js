Ext.define('PinpointMyPals.controller.Application', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            connectWithFacebookButton: 'button[action=connectWithFacebook]',
            viewport: '#viewport',
            mainView: '#mainView',
            palList: '#pals',
            map: 'map'
        },
        control: {
            connectWithFacebookButton: {
                tap: 'doConnectWithFacebook'
            },
            mainView: {
                push: 'onMainViewPush'
            },
            palList: {
                itemtap: 'onPalSelect'
            },
            map: {
                maprender: 'onMapRender'
            }
        }
    },

    doConnectWithFacebook: function() {
        this.getViewport().setActiveItem(this.getMainView());
    },

    onMainViewPush: function(view, item) {
        Ext.defer(this.getPalList().deselectAll, 200, this.getPalList());
    },

    onPalSelect: function(list, index, node, record) {
        if (!this.showPal) {
            this.showPal = Ext.create('PinpointMyPals.view.pal.Show');
        }

        this.showPal.setRecord(record);

        this.getMainView().push(this.showPal);
    },

    onMapRender: function(component, map, options) {
        var marker = new google.maps.Marker({
            position: map.center,
            title : 'Current Location',
            map: map
        });
    }
});