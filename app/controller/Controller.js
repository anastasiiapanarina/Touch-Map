Ext.define('recruitingNP.controller.Controller', {
	extend: 'Ext.app.Controller',
	requires: [
		'recruitingNP.view.candidates.CandidatesView',
		'recruitingNP.view.candidates.CandidatesDetailsView',
		'recruitingNP.view.offer.OfferView',
		'recruitingNP.view.Map'
	],
	config: {
		refs: {
			navView: 'navview',
			logoutButton: 'button#logoutButton',
			mapView: 'mapview'
		},
		searchBox: null,
		control: {
			'navview': {
				back: function (view) {
					view.getActiveItem().isXType('loginform') ? this.getLogoutButton().hide() : this.getLogoutButton().show();
					this.setAddressValue(view);
					
				},
				initialize: function (view) {
					this.getLogoutButton().hide();					
				}
			},
			'button#loginButton': {
				tap: 'doLogin'
			},
			'button#logoutButton': {
				tap: 'doLogout'
			},

			'candidates': {
				itemtap: 'showCandidateDetails'
			},

			'button#offerButton': {
				tap: 'makeOffer'
			},

			'button#showButton': {
				tap: 'showMap'
			},

			'mapview': {
				maprender: 'renderMap'
			},

			'searchfield#search-address': {
				focus: function () {
					var input = Ext.query('.search-address input')[0];
					this.searchBox = new google.maps.places.SearchBox(input);
				},
				clearicontap: function () {
					this.searchBox = null;
				}
			},
			'searchfield#search-place': {
				initialize: function (searchfield) {
					if(this.searchBox && this.searchBox.getPlaces()) {
						var value = this.searchBox.getPlaces()[0].formatted_address;
						searchfield.setValue(value);
					}

				},
				change: function (input) {
					var me = this;
					if(input.up() && input.getValue() !== "") {
						google.maps.event.addListener(this.searchBox, 'places_changed', function() {
							me.showPlace(me.getMapView().getMap());
						});
					}
				},
				focus: function (searchfield) {
					var input = Ext.query('.search-place input')[0];
					this.searchBox = new google.maps.places.SearchBox(input);
				},
				clearicontap: function () {
					this.searchBox = null;
				}
			}
		}
	},

	setAddressValue: function (view) {
		if (view.getActiveItem().isXType('offerview') && 
			view.getActiveItem().getActiveItem().isXType('candidateinfo')) {
			var candidateView = view.getActiveItem().getActiveItem(),
				value = this.searchBox ? this.searchBox.getPlaces()[0].formatted_address : "";
			candidateView.down('#search-address').setValue(value);
		}
	},

	doLogin: function (button) {
		var form = button.up(),
			values = form.getValues(),
			name = values.name,
			password = values.password;
		this.getLogoutButton().show();	
		this.getNavView().getNavigationBar().getBackButton().show();
		this.getNavView().push({
				title: 'Candidates',
				xtype: 'candidates'
		});
		
		// if (name === "nata" && password === "nnnn") {

		// } else {
		// 	Ext.Msg.alert('', 'Please, enter correct name and password!')
		// }
	},

	doLogout: function (button) {
		button.hide();
		this.getNavView().reset();
	},

	showCandidateDetails: function (view, index, noda, record) {
		
		this.getNavView().push(
			Ext.create('recruitingNP.view.candidates.CandidatesDetailsView', {
				record: record,
			})
		);
	},

	makeOffer: function (button) {
		var record = button.up().getRecord();
		button.up().hide();
		this.getNavView().push(Ext.create('recruitingNP.view.offer.OfferView',{
			record: record
		}));
	},

	showMap: function (button) {
		if (button.up().getItemId() === 'candidateinfo') {
			this.getNavView().push(Ext.create('recruitingNP.view.Map',{
				searchBox: this.searchBox
			}));
		} else {
			var	record = button.up().down('selectfield').getRecord();
			this.getNavView().push(Ext.create('recruitingNP.view.Map',{
				record: record
			}));		
		}
	},


	renderMap: function (mapView) {
		if(mapView.getRecord()) {
			var latitude = mapView.getRecord().get('latitude'),
				longitude = mapView.getRecord().get('longitude'),
				latLng = new google.maps.LatLng(latitude, longitude);

			var marker = new google.maps.Marker({
				map: mapView.getMap(),
				position: latLng
			});
			mapView.setMapCenter(latLng);
		} else {
			var map = mapView.getMap();
			var defaultBounds = new google.maps.LatLngBounds(
				new google.maps.LatLng(-33.8902, 151.1759),
				new google.maps.LatLng(-33.8474, 151.2631));
			map.fitBounds(defaultBounds);
			var me = this;
			mapView.setItems([
				{
					xtype: 'searchfield',
					itemId: 'search-place',
					cls: 'search-place',
					placeHolder: 'Enter address',
					width: 500,
					margin: '5px 55px'
				}
			]);
			if (this.searchBox) {
				me.showPlace(mapView.getMap());
			}
		}
	},
	

	showPlace: function (map) {
		var markers = [];
		var searchBox = this.searchBox;

		var places = searchBox.getPlaces();
		for (var i = 0, marker; marker = markers[i]; i++) {
			marker.setMap(null);
		}
		markers = [];
		var bounds = new google.maps.LatLngBounds();
		for (var i = 0, place; place = places[i]; i++) {
			var image = {
				url: place.icon,
				size: new google.maps.Size(71, 71),
				origin: new google.maps.Point(0, 0),
				anchor: new google.maps.Point(17, 34),
				scaledSize: new google.maps.Size(25, 25)
			};

			var marker = new google.maps.Marker({
				map: map,
				title: place.name,
				position: place.geometry.location
			});

			markers.push(marker);

			bounds.extend(place.geometry.location);
		}
		map.fitBounds(bounds);
		this.getMapView().setMapOptions({zoom: 12});
		google.maps.event.addListener(map, 'bounds_changed', function() {
			var bounds = map.getBounds();
			searchBox.setBounds(bounds);
		});
	}

});