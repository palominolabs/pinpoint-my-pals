Ext.define('PinpointMyPals.view.pal.List', {
    extend: 'Ext.List',

    id: 'pals',

    config: {
        title: 'Pals',

        store: 'Pals',
        itemTpl: '{firstName} {lastName}'
    }
});