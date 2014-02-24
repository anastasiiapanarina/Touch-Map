Ext.define('recruitingNP.candidates.view.CandidatesView', {
	extend: 'Ext.dataview.DataView',
	alias: ['widget.candidates'],
	requires: [
		'recruitingNP.candidates.store.CandidatesStore',
		'recruitingNP.candidates.view.CandidatesDetailsView'
	],
	config: {
		title: 'Candidates',
		cls: 'candidates-view',
		scrollable: 'horizontal',
		inline: {
			wrap: false
		},
		itemTpl: new Ext.XTemplate('<div class="candidates-wrapper" candidateId={candidate.candidateId}>',
		'	<div class="candidates-image">',
		'		<img src="{[this.getImageUrl(values.candidate.imageUrl)]}" />',
		'	</div>',
		'	<div class="candidates-name">{candidate.displayName}</div>',
		'</div>',
		{
			getImageUrl: function (url) {
				if (url.indexOf("39ProfileMale") !== -1) {
					url = "https://devqa.sabacloud.com" + url;
				}
				return url;
			}
		}),
		store: Ext.create('recruitingNP.candidates.store.CandidatesStore')
		
	}
});