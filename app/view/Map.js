Ext.define('recruitingNP.view.Map',{
	extend: 'Ext.Map',
	alias: ['widget.mapview'],
	requires: [
		'recruitingNP.model.LocationsModel'
	],
	
	config: {
		title: 'Map',
		mapOptions: {
			zoom: 12,
		}
	}
});