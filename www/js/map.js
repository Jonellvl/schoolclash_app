/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
	// Application Constructor
	initialize: function() {
		this.bindEvents();

		app.resizeMap();

		var map = L.map('map-canvas').setView([52.511, 13.388], 13);

		//this works, but is online:
		/*
		 L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		 maxZoom: 18
		 }).addTo(map);
		 */

		//TODO build something to fall back to web if not found.
		L.tileLayer('img/mapTiles/{z}/{x}/{y}.jpg', {
			maxZoom: 16,
			minZoom: 14,
		}).addTo(map);

		var bounds = L.latLngBounds([[52.534, 13.364], [52.497, 13.422]]);
		map.setMaxBounds(bounds);
		map.on('drag', function() {
			map.panInsideBounds(bounds, { animate: false });
		});


		// L.marker([52.511, 13.388]).addTo(map)
		// 	.bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup();

		                // Haal de opgeslagen data op
                var locationData = JSON.parse(window.localStorage.getItem('questions'));
                // Lege array voor de longs en lats
                var longLats = [];

                for (var i = locationData.length - 1; i >= 0; i--) {
                    data = locationData[i];
                    // Gooi de longs en lats in een array
                    longLats.push([data["long"],data["lat"],data["title"]]);
                }

                for (var i = longLats.length - 1; i >= 0; i--) {
                	L.marker([longLats[i][1], longLats[i][0]]).addTo(map).bindPopup(longLats[i][2]);
					// console.log(longLats[i][2] + longLats[i][1] + longLats[i][0]);                	
                }

		var popup = L.popup();

	},

	// Bind Event Listeners
	//
	// Bind any events that are required on startup. Common events are:
	// 'load', 'deviceready', 'offline', and 'online'.
	bindEvents: function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
	},
	// deviceready Event Handler
	//
	// The scope of 'this' is the event. In order to call the 'receivedEvent'
	// function, we must explicity call 'app.receivedEvent(...);'
	onDeviceReady: function() {
		app.receivedEvent('deviceready');
	},
	// Update DOM on a Received Event
	receivedEvent: function(id) {
		var parentElement = document.getElementById(id);
		var listeningElement = parentElement.querySelector('.listening');
		var receivedElement = parentElement.querySelector('.received');

		listeningElement.setAttribute('style', 'display:none;');
		receivedElement.setAttribute('style', 'display:block;');

		console.log('Received Event: ' + id);
	},
	resizeMap: function() {
		$("#map-canvas").height(Math.max(100,$(window).height()-90));// TODO set
	}


};

$(window).resize(function() {
	app.resizeMap();
});