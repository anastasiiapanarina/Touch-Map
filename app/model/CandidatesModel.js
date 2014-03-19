Ext.define('recruitingNP.model.CandidatesModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { 
            	name: 'email'
            	
           	},
            {
                name: 'candidateId',
                convert: function (v, record) {
                    return record.raw.candidate.candidateId;
                }
            },
            {
                name: 'displayName',
                convert: function (v, record) {
                    return record.raw.candidate.displayName;
                }
            },
            {
                name: 'imageUrl',
                convert: function (v, record) {
                    var url = record.raw.candidate.imageUrl;
                    if (url.indexOf("39ProfileMale") !== -1) {
                        url = "https://devqa.sabacloud.com" + url;
                    }
                    return url;
                }
            },
            {
                name: 'personId',
                convert: function (v, record) {
                    return record.raw.candidate.personId;
                }
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