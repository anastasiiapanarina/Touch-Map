Ext.define('recruitingNP.view.candidates.CandidatesTabPanel',{
	extend: 'Ext.tab.Panel',
	alias: ['widget.candidatestabpanel'],
	requires: [
		'recruitingNP.view.candidates.CandidatesView',
	], 

	config: {
		tabBarPosition: 'bottom',
		items: [
			{
				xtype: 'candidates',
				title: 'Candidate',
        		iconCls: 'home',
			},
			{
				xtype: 'mapview',
				itemId: 'addressMap',
				title: 'Map',
				iconCls: 'more',
				mapOptions: {
					zoom: 12
				},
				items: [
					{
						xtype: 'toolbar',
						docked: 'top',
						items: [
							{
								xtype: 'selectfield',
								itemId: 'centerMapPoint',
								name: 'location',
								label: 'Center:',
								valueField: 'cityName',
								displayField: 'cityName',
								store: Ext.create('recruitingNP.store.LocationsStore')
							},
							{
								xtype: 'numberfield',
								itemId: 'mapRadius',
								label: 'Radius:',
								//value: 100
							}
						]
					}
				]
			}
		]
	}
});