Ext.define('recruitingNP.view.candidates.CandidatesDetailsView', {
	extend: 'Ext.Panel',
	alias:['widget.candidatesdetails'],
	requires: [
		'recruitingNP.model.CandidatesModel'
	],

	initialize: function () {
		this.setHtml(this.setHtmlTpl());
		this.callParent(arguments);
	},

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
				itemId: 'offerButton',
				cls: 'offer-button'

			}
		]
	},

	setHtmlTpl: function () {
		var tpl = new Ext.Template(
			'<div class="candidates-details-wrapper">',
			'	<div class="candidates-details-name-wrapper">',
			'		<div class="candidates-details-name">{displayName}</div>',
			'		<div class="candidates-details-number">Candidate #{applicantNumber}</div>',
			'	</div>',
			'	<div class="candidates-details-info-wrapper">',
			'		<div class="candidates-details-email">{email}</div>',
			'		<div class="candidates-details-source">Via {sourceName}</div>' ,
			'	</div>',
			'</div>'
		);
		return tpl.append(this.element, this.getRecord().getData());
	}

});