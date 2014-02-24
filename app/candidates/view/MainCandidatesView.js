Ext.define('recruitingNP.candidates.view.MainCandidatesView', {
	extend: 'Ext.Panel',
	alias: ['widget.candidatesview'],
	requires: [
		'recruitingNP.candidates.view.CandidatesView'
	],
	config: {
		cls: 'main-candidates-view',
		items: [
			{
				xtype: 'toolbar',
				cls: 'candidates-toolbar',
				items: [
					{
						xtype: 'button',
						text: 'Sign out',
						ui: 'confirm',
						id: 'logoutButton'
					}
				]
			},
			{
				xtype: 'candidates',
			}
		]
	}
});
