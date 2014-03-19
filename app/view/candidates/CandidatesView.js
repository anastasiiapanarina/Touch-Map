Ext.define('recruitingNP.view.candidates.CandidatesView', {
	extend: 'Ext.dataview.DataView',
	alias: ['widget.candidates'],
	requires: [
		'recruitingNP.store.CandidatesStore',
		'recruitingNP.view.candidates.CandidatesDetailsView'
	],
	config: {
		
		cls: 'candidates-view',
		scrollable: 'horizontal',
		inline: {
			wrap: false
		},
		itemTpl: new Ext.XTemplate('<div class="candidates-wrapper" candidateId={candidateId}>',
		'	<div class="candidates-image">',
		'		<img src="{imageUrl}" />',
		'	</div>',
		'	<div class="candidates-name">{displayName}</div>',
		'</div>'),

		store: Ext.create('recruitingNP.store.CandidatesStore')
		
	}
});