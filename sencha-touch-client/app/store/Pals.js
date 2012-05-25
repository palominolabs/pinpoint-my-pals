Ext.define('PinpointMyPals.store.Pals', {
    extend: 'Ext.data.Store',

    config: {
        model: 'PinpointMyPals.model.Pal',
        autoLoad: true,
        sorters: 'lastName',
        proxy: {
            type: 'ajax',
            url: 'pals.json'
        }
    }
});