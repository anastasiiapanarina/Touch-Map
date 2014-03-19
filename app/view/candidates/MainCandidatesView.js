Ext.define('recruitingNP.view.candidates.MainCandidatesView', {
	extend: 'Ext.Panel',
	alias: ['widget.candidatesview'],
	requires: [
		'recruitingNP.view.candidates.CandidatesView'
	],
	config: {
		cls: 'main-candidates-view',
		items: [
			// {
			// 	xtype: 'toolbar',
			// 	cls: 'candidates-toolbar',
			// 	items: [
			// 		{
			// 			xtype: 'button',
			// 			text: 'Sign out',
			// 			ui: 'confirm',
			// 			itemId: 'logoutButton'
			// 		}
			// 	]
			// },
			{
				xtype: 'candidates',
			}
		]
	}
});
