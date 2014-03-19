Ext.define('recruitingNP.view.offer.OfferView', {
	extend: 'Ext.Carousel',
	alias: ['widget.offerview'],
	requires: [
		'recruitingNP.view.offer.CandidateInfoForm',
		'recruitingNP.view.offer.OfferInfoForm'
	],
	initialize: function () {
		var form = this.down('candidateinfo');
		form.setRecord(this.getRecord());
		this.callParent(arguments);
	},
	
	config: {
		items: [
			{
				title: 'Candidate Information',
				xtype: 'candidateinfo'
			},
			{
				title: 'Offer Information',
				xtype: 'offerinfo'
			}
		]
	}
});