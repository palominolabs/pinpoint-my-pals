Ext.define('PinpointMyPals.view.Pals', {
    extend: 'Ext.List',

    id: 'pals',

    config: {
        title: 'Pals',

        store: 'Pals',
        itemTpl: '{firstName} {lastName}'
    }
});