Ext.define('recruitingNP.candidates.model.CandidatesModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { 
            	name: 'email'
            	
           	},
            {
            	name: 'candidate',
            	fields: [
            		{
            			name: 'candidateId'
            		},
            		{
            			name: 'displayName'
            		}
            	]
            },
            {
            	name: 'resumeSource'
            },
            {
            	name: 'sourceName'
            },
            {
            	name: 'applicantNumber'
            }
        ]
    }
});