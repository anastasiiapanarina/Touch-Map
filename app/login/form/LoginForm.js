Ext.define('recruitingNP.login.form.LoginForm', {
	extend: 'Ext.form.Panel',
	cls: 'loginform',
	requires: [
		'recruitingNP.candidates.view.CandidatesView'
	],
	config: {
		items: [
			{
				xtype: 'fieldset',
				cls: 'login-fields',
				items: [
					{
						xtype: 'textfield',
						name: 'name',
						label: 'Name'
					},
					{
						xtype: 'passwordfield',
						name: 'password',
						label: 'Password'
					},
				]
			},
			{
				xtype: 'button',
				id: 'loginButton',
				text: 'Sign in',
				cls: 'login-button',
				ui: 'confirm',
				// handler: function (button) {
				// 	Ext.Viewport.remove(button.up(), true);
				// 	Ext.Viewport.add(Ext.create('recruitingNP.candidates.view.MainCandidatesView'));
				// }
			}
		]
	}
});