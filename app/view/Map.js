Ext.define('recruitingNP.view.Map',{
	extend: 'Ext.Map',
	alias: ['widget.mapsss'],
	requires: [
		'recruitingNP.model.LocationsModel',
		'recruitingNP.store.LocationsStore'
	],
	
	config: {
		title: 'Map',
		// items: [
		// 	{
		// 		xtype: 'searchfield',
		// 		placeHolder: 'Enter address',
		// 		width: 500,
		// 		margin: '5px 55px',
		// 		id: 'search-place'
		// 	}
		// ],
		mapOptions: {
			zoom: 12,
		}
	}
});