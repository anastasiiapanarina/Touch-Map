Ext.define('recruitingNP.offer.form.CandidateInfoForm', {
	extend: 'Ext.form.Panel',
	alias: ['widget.candidateinfo'],

	config: {
		
		items: [
			{
				xtype: 'textfield',
				label: 'First name and Last name',
				value: this.name
			}
		]
	}
});