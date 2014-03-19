Ext.define('recruitingNP.view.offer.OfferInfoForm',{
	extend: 'Ext.form.Panel',
	alias: ['widget.offerinfo'],

	config: {
		items: [
			{
				xtype: 'fieldset',
				items: [
					{
						xtype: 'textfield',
						label: 'Offer Title:'
					},
					{
						xtype: 'numberfield',
						label: 'Offered Salary:'
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
						xtype: 'datepickerfield',
						label: 'Start Date:',
						destroyPickerOnHide: true,
						name: 'startDate',
						value: new Date(),
						picker: {
							yearFrom: 2014
						}
					}
				]
			}
		]
	}
});