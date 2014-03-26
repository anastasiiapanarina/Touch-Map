Ext.define('recruitingNP.view.offer.CandidateInfoForm', {
	extend: 'Ext.form.Panel',
	alias: ['widget.candidateinfo'],
	requires: [
		'recruitingNP.model.CandidatesModel'
	],

	config: {
		cls: 'candidate-info',
		items: [
			{
				xtype: 'textfield',
				label: 'Name',
				name: 'displayName',
				labelWidth: '30%',
				width: '80%'

			},
			{
				xtype: 'button',
				text: 'Show map',
				itemId: 'showButton',
				width: '18%',
				style: {
					float: 'right',
					margin: '5px 1%'
				}
			},
			{
				xtype: 'searchfield',
				itemId: 'search-address',
				cls: 'search-address',
				label: 'Address',
				labelWidth: '30%',
				width: '80%',
                name: 'address',
				placeHolder: 'Enter address'
			},
			{
				xtype: 'emailfield',
				label: 'Email',
				labelWidth: '30%',
				width: '80%',
				name: 'email'
			}		
		]
	}
});