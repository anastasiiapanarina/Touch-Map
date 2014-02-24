Ext.define('recruitingNP.offer.view.OfferView', {
	extend: 'Ext.tab.Panel',
	requires: [
		'recruitingNP.offer.form.CandidateInfoForm'
	],
	config: {
		tabBar: {
			layout: {
				pack: 'center'
			}
		},
		items: [
			{
				title: 'Candidate Information',
				xtype: 'candidateinfo',
			},
			{
				title: 'Offer Information',
				xtype: 'formpanel'
			}
		]
	}
});