Ext.define('recruitingNP.view.LoginForm', {
	extend: 'Ext.form.Panel',
	alias: ['widget.loginform'],
	cls: 'loginform',

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
				itemId: 'loginButton',
				text: 'Log in',
				cls: 'login-button',
				ui: 'confirm'
			}
		]
	}
});