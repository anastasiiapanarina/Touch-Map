Ext.define('recruitingNP.view.offer.CandidateInfoForm', {
	extend: 'Ext.form.Panel',
	alias: ['widget.candidateinfo'],
	requires: [
		'recruitingNP.model.CandidatesModel'
	],

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
				itemId: 'search-address',
				cls: 'search-address',
				label: 'Address',
				labelWidth: 300,
                name: 'address',
				placeHolder: 'Enter address'
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