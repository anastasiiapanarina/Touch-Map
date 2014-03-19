Ext.define('recruitingNP.view.offer.CandidateInfoForm', {
	extend: 'Ext.form.Panel',
	alias: ['widget.candidateinfo'],
	requires: [
		'recruitingNP.model.CandidatesModel',
		'recruitingNP.store.CandidatesStore',
		'recruitingNP.store.LocationsStore'
	],

	initialize: function () {
		console.log(this.getValues());
		this.callParent(arguments);
	},
	config: {
		itemId: 'candidateinfo',
		items: [
			{
				xtype: 'textfield',
				labelWidth: 300,
				label: 'Name',
				name: 'displayName'
			},
			{
				xtype: 'button',
				text: 'Show map',
				itemId: 'showButton',
				width: '15%',
				style: {
					float: 'right',
					margin: '0 5px'
				}
			},
			{
				xtype: 'searchfield',
				id: 'search-address',
                name: 'address',
				itemId: 'addressField',
				labelWidth: 300,
				label: 'Address',
			},
			{
				xtype: 'emailfield',
				label: 'Email',
				labelWidth: 300,
				name: 'email'
			}		
		]
	}
});