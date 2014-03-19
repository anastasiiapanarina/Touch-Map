Ext.define('recruitingNP.store.LocationsStore', {
	extend: 'Ext.data.Store',
	storeId: 'locationStore',

	requires: [
		'recruitingNP.model.LocationsModel'
	],

	config: {
	
	    model: 'recruitingNP.model.LocationsModel',
	    proxy: {
	        type: 'ajax',
	        url : 'api/locations.json',
	        reader: {
                type: 'json',
                rootProperty: 'searchResults'
            }
	    },
	    autoLoad: true
	}
});