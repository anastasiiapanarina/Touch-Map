Ext.define('recruitingNP.view.MainNavigationView', {
	extend: 'Ext.navigation.View',
	alias: ['widget.navview'],
	fullscreen: true,
	requires: [
		'recruitingNP.view.LoginForm',
	],

	config: {
		useTitleForBackButtonText: true,
		navigationBar: {
			items: [
				{
					xtype: 'button',
					text: 'Log out',
					itemId: 'logoutButton'
				}
			]
		},

	    items: [
	        {
	            title: 'Log in',
	            xtype: 'loginform'
	        }        
	    ]
	}
});