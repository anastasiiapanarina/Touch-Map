Ext.define('recruitingNP.view.offer.OfferInfoForm',{
	extend: 'Ext.form.Panel',
	alias: ['widget.offerinfo'],

	config: {
		cls: 'offer-info',
		items: [
			{
				xtype: 'fieldset',
				items: [
					{
						xtype: 'textfield',
						label: 'Offer Title:',
						name: 'title',
					},
					{
						xtype: 'numberfield',
						label: 'Offered Salary:',
						name: 'salary',
					},
					{
						xtype: 'button',
						text: 'Show map',
						itemId: 'showButton',
						width: '28%',
						style: {
							float: 'right',
							margin: '5px 1%'
						}
					},
					{
						xtype: 'selectfield',
						cls: 'location',
						name: 'location',
						itemId: 'locationField',
						labelWidth: '43%',
						label: 'Location:',
						valueField: 'cityName',
						displayField: 'cityName',
						store: Ext.create('recruitingNP.store.LocationsStore')
					},
					{
						xtype: 'datepickerfield',
						label: 'Start Date:',
						cls: 'start-date',
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