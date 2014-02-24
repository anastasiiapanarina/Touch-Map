Ext.define('recruitingNP.controller.NavigationController', {
	extend: 'Ext.app.Controller',
	requires: [
		'recruitingNP.login.form.LoginForm',
		'recruitingNP.candidates.view.CandidatesView',
		'recruitingNP.offer.view.OfferView'
	],
	config: {
		control: {
			'#loginButton': {
				tap: 'doLogin'
			},
			'#logoutButton': {
				tap: 'doLogout'
			},
			'candidates': {
				itemtap: 'showCandidateDetails'
			},
			'#offerButton': {
				tap: 'makeOffer'
			}
		},
	},

	doLogin: function (button) {
		var form = button.up(),
			values = form.getValues(),
			name = values.name,
			password = values.password;
		if (name === "nata" && password === "nnnn") {
			Ext.Viewport.remove(button.up(), true);
			Ext.Viewport.add(Ext.create('recruitingNP.candidates.view.MainCandidatesView'));

		} else {
			Ext.Msg.alert('', 'Please, enter correct name and password!')
		}
	},

	doLogout: function (button) {
		Ext.Viewport.remove(button.up().up(), true);
		Ext.Viewport.add(Ext.create('recruitingNP.login.form.LoginForm'));
	},

	showCandidateDetails: function (view, index, noda, record) {
		var personData = record.data,
			displayName = personData.candidate.displayName,
			email = personData.email,
			email = email !== null ? email : '',
			applicantNumber = personData.applicantNumber,
			sourceName = personData.sourceName,
			resumeSource = personData.resumeSource,
			display = '<div class="candidates-details-wrapper">' +
			'	<div class="candidates-details-name-wrapper">'+
			'		<div class="candidates-details-name">' + displayName + '</div>' +
			'		<div class="candidates-details-number">Candidate #' + applicantNumber + '</div>' +
			'	</div>'+
			'	<div class="candidates-details-info-wrapper">'+
			'		<div class="candidates-details-email">' + email + '</div>' +
			'		<div class="candidates-details-source">Via ' + sourceName + '</div>' +
			'	</div>'+
			'</div>';
		Ext.Viewport.add(Ext.create('recruitingNP.candidates.view.CandidatesDetailsView', {
			html: display,
			record: record
		}));
	},

	makeOffer: function (button) {

		var record = button.up().getRecord().getData();
			name = record.candidate.displayName;
		Ext.Viewport.remove(button.up().up().down('candidatesview'), true);
		Ext.Viewport.remove(button.up(), true);
		Ext.Viewport.add(Ext.create('recruitingNP.offer.view.OfferView',{
			record: record,
			name: name
		}));
	}
});