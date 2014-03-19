Ext.define('recruitingNP.store.CandidatesStore', {
	extend: 'Ext.data.Store',
	storeId: 'candidatesStore',

	requires: [
		'recruitingNP.model.CandidatesModel'
	],

	config: {
	
	    model: 'recruitingNP.model.CandidatesModel',
	    proxy: {
	        type: 'ajax',
	        url : 'api/candidates.json',
	        reader: {
                type: 'json',
                root: 'searchResults'
            }
	    },
	    autoLoad: true
	}
});