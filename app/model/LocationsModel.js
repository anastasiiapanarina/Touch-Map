Ext.define('recruitingNP.model.LocationsModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
        	{
        		name: 'cityName'
        	},
        	{
        		name: 'latitude',
        		convert: function (v, record) {
                    return record.raw.coords.latitude;
                }
        	},
        	{
        		name: 'longitude',
                convert: function (v, record) {
                    return record.raw.coords.longitude;
                }
        	}
        ]
    }
});