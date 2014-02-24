Ext.define('recruitingNP.candidates.view.CandidatesDetailsView', {
	extend: 'Ext.Panel',
	requires: [
		'recruitingNP.candidates.store.CandidatesStore',
		'recruitingNP.candidates.model.CandidatesModel',
	],

	config: {

		
		modal: true,
		hideOnMaskTap: true,
		width: 500,
		height: 200,
		centered: true,
		items: [
			{
				xtype: 'button',
				text: 'Make offer',
				ui: 'round',
				width: '98%',
				bottom: 7,
				left: '1%',
				id: 'offerButton',
				cls: 'offer-button'

			}
		]
	}
});