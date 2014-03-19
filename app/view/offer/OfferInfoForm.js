Ext.define('recruitingNP.view.offer.OfferInfoForm',{
	extend: 'Ext.form.Panel',
	alias: ['widget.offerinfo'],

	config: {
		items: [
			{
				xtype: 'fieldset',
				items: [
					{
						xtype: 'numberfield',
						label: 'Offered Salary:'
					},
					{
						xtype: 'textfield',
						label: 'Offer Title:'
					},
					{
						xtype: 'button',
						text: 'Show map',
						itemId: 'showButton',
						width: '15%',
						style: {
							float: 'right',
							margin: '0 5px'
						}
					},
					{
						xtype: 'selectfield',
						placeHolder: 'Enter address',
						name: 'location',
						itemId: 'locationField',
						labelWidth: 300,
						label: 'Location:',
						valueField: 'cityName',
						displayField: 'cityName',
						store: Ext.create('recruitingNP.store.LocationsStore')
					},
					{
						xtype: 'textfield',
						label: 'Start Date:'
					}
				]
			}
		]
	}
});