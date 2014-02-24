Ext.define('recruitingNP.candidates.store.CandidatesStore', {
	extend: 'Ext.data.Store',

	requires: [
		'recruitingNP.candidates.model.CandidatesModel'
	],

	config: {
	
	    model: 'recruitingNP.candidates.model.CandidatesModel',
	    proxy: {
	        type: 'ajax',
	        url : 'api/candidates.json',
	        //url: 'https://devqa.sabacloud.com/Saba/api/recruiting/requisition/jobrq000000000001020/candidates/interviewing?pageNum=1&pageSize=20',
	        reader: {
                type: 'json',
                root: 'searchResults'
            }
	    },
	    autoLoad: true
	}
});