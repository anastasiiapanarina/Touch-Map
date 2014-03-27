Ext.define('recruitingNP.controller.Controller', {
	extend: 'Ext.app.Controller',
	requires: [
		'recruitingNP.view.candidates.CandidatesTabPanel',
		'recruitingNP.view.candidates.CandidatesDetailsView',
		'recruitingNP.view.offer.OfferView',
		'recruitingNP.view.Map'
	],
	config: {
		refs: {
			navView: 'navview',
			logoutButton: 'button#logoutButton',
			mapView: 'mapview',
			candMap: 'map#addressMap',
			mapRadius: 'numberfield#mapRadius',
			centerMapPoint: 'selectfield#centerMapPoint'
		},
		searchBox: null,
		markers: [],
		circle: null,
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

			'candidates': {
				itemtap: 'showCandidateDetails',
			},

			'candidatesdetails': {
				hide: function () {
					this.getNavView().getNavigationBar().getBackButton().enable();
					this.getLogoutButton().enable();
				}
			},

			'mapview': {
				maprender: 'renderMap'
			},

			'map#addressMap': {
				maprender: 'renderCandidatesPlaces',
			},

			'button#loginButton': {
				tap: 'doLogin'
			},
			
			'button#logoutButton': {
				tap: 'doLogout'
			},

			'button#offerButton': {
				tap: 'makeOffer'
			},

			'button#showButton': {
				tap: 'showMap'
			},

			'selectfield#centerMapPoint': {
				change: 'showNewCandidatesMarkers'
			},

			'numberfield#mapRadius': {
				change: 'showNewCandidatesMarkers'
			},
			'searchfield#search-address': {
				focus: function () {
					var input = Ext.query('.search-address input')[0];
					this.searchBox = new google.maps.places.SearchBox(input);
				},
				clearicontap: function () {
					this.searchBox = null;
					this.clearMarkers();
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
							me.showPlace(input.up().getMap());
						});
					}
				},
				focus: function (searchfield) {
					var input = Ext.query('.search-place input')[0];
					this.searchBox = new google.maps.places.SearchBox(input);
				},
				clearicontap: function () {
					this.searchBox = null;
					this.clearMarkers();
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
		console.log('Device platform: ' + Ext.device.Device.platform);
		console.log(Ext.os.deviceType);
		this.getLogoutButton().show();	
		this.getNavView().getNavigationBar().getBackButton().show();
		this.getNavView().push({
			title: 'Candidates',
			xtype: 'candidatestabpanel',
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
		this.getNavView().getNavigationBar().getBackButton().disable();
		this.getLogoutButton().disable();
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
		if (button.up().isXType('candidateinfo')) {
			this.getNavView().push(Ext.create('recruitingNP.view.Map',{
				searchBox: this.searchBox,
			}));
		} else {
			var	record = button.up().down('selectfield').getRecord();
			this.getNavView().push(Ext.create('recruitingNP.view.Map',{
				record: record,
			}));		
		}
	},

	renderMap: function (mapView) {
		if (mapView.getItemId() === "addressMap") {
			this.renderCandidatesPlaces();
		} else {
			mapView.getRecord() ? this.renderSelectedPlace(mapView) : this.renderSearchedPlace(mapView);
		}
	},
	
	showNewCandidatesMarkers: function () {
		this.clearMarkers();
		this.clearCircle();
		this.renderCandidatesPlaces();
	},

	renderCandidatesPlaces: function () {
		var store = Ext.data.StoreManager.lookup('candidatesStore'),
			mapView = this.getMapView(),
			candidates = store.getRange(),
			map = mapView.getMap(),
			radius = this.getMapRadius().getValue(),
			center = this.getCenterMapPoint().getRecord(),
			centerPoint,
	     	bounds = new google.maps.LatLngBounds(),
			markers = [],
			circle,
			circleOptions;
	
	    centerPoint = new google.maps.LatLng(center.get('latitude'), center.get('longitude'));
     	bounds.extend(centerPoint);
	    circleOptions = {
	        center: centerPoint,
	        fillColor: "#00AAFF",
	        fillOpacity: 0.5,
	        strokeColor: "#FFAA00",
	        strokeOpacity: 0.8,
	        strokeWeight: 2,
	        clickable: false,
	        radius: radius*1000
	    }
	 
	    this.circle = new google.maps.Circle(circleOptions);
	    this.circle.setMap(map);

		for (var i = 0, place; place = candidates[i]; i++) {
			var latLng = new google.maps.LatLng(place.get('addresslat'), place.get('addresslong'));
			var dist = google.maps.geometry.spherical.computeDistanceBetween (centerPoint, latLng);
			if (dist/1000 < radius) {
				var marker = new google.maps.Marker({
					map: map,
					title: place.get('displayName'),
					position: latLng,
					clickable: true
				});
				markers.push(marker);
				bounds.extend(latLng);
			}
		}


		this.markers = markers;
		radius ? map.fitBounds(this.circle.getBounds()) : mapView.setMapCenter(centerPoint);
	},

	clearMarkers: function () {
		if(this.markers.length !== 0) {
			for (var i = 0, marker; marker = this.markers[i]; i++) {
				marker.setMap(null);
			}
			this.markers = [];
		}
	},

	clearCircle: function () {
		this.circle.setMap(null);
		this.circle = null;
	},

	renderSelectedPlace: function (mapView) {
		var latitude = mapView.getRecord().get('latitude'),
			longitude = mapView.getRecord().get('longitude'),
			latLng = new google.maps.LatLng(latitude, longitude);

		new google.maps.Marker({
			map: mapView.getMap(),
			position: latLng
		});
		mapView.setMapCenter(latLng);
	},

	renderSearchedPlace: function (mapView) {
		var map = mapView.getMap(),
			defaultBounds = new google.maps.LatLngBounds(
			new google.maps.LatLng(-33.8902, 151.1759),
			new google.maps.LatLng(-33.8474, 151.2631));
		map.fitBounds(defaultBounds);
		mapView.setItems([
			{
				xtype: 'searchfield',
				itemId: 'search-place',
				cls: 'search-place',
				placeHolder: 'Enter address',
			}
		]);
		if (this.searchBox) {
			this.showPlace(mapView.getMap());
		}
	},


	showPlace: function (map) {
		var markers = [],
			searchBox = this.searchBox,
			places = searchBox.getPlaces(),
			bounds = new google.maps.LatLngBounds();

		for (var i = 0, place; place = places[i]; i++) {
			var marker = new google.maps.Marker({
				map: map,
				title: place.name,
				position: place.geometry.location
			});
			markers.push(marker);
			bounds.extend(place.geometry.location);
		}

		this.markers = markers;

		map.fitBounds(bounds);
		map.setOptions({zoom: 12});
		google.maps.event.addListener(map, 'bounds_changed', function() {
			var bounds = map.getBounds();
			searchBox.setBounds(bounds);
		});
	}

});