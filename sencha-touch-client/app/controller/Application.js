Ext.define('PinpointMyPals.controller.Application', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            connectWithFacebookButton: 'button[action=connectWithFacebook]',
            viewport: '#viewport',
            mainView: '#mainView',
            palList: '#pals'
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
        this.getMainView().push({
            title: [record.get('firstName'), record.get('lastName')].join(' '),
            html: 'I see you are interested in ' + record.get('firstName') + '.  A fine choice.',
            styleHtmlContent: true
        });
    }
});