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
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
      var selected = [
        "CA",
        "CN",
        "IT",
        "US"
      ];
      selected = JSON.parse(window.localStorage.getItem("visited"));
        $(function(){
          $('#world-map').vectorMap({map: 'world_mill',backgroundColor: "Azure",zoomButtons : false,zoomMax:1,regionStyle:{
      initial: {
        fill: 'silver',
        "fill-opacity": 1,
        stroke: 'none',
        "stroke-width": 0,
        "stroke-opacity": 1
      },
      hover: {
        fill: 'red',
        "fill-opacity": 0.8,
        cursor: 'pointer'
      },
      selected: {
        fill: 'orange'
      },
      selectedHover: {
        fill: 'blue'
      }
    },
    selectedRegions:selected});
    $('#ca-map').vectorMap({map: 'ca_lcc',backgroundColor: "Azure",zoomButtons : false,zoomMax:1, regionStyle:{
initial: {
  fill: 'silver',
  "fill-opacity": 1,
  stroke: 'none',
  "stroke-width": 0,
  "stroke-opacity": 1
},
hover: {
  fill: 'red',
  "fill-opacity": 0.8,
  cursor: 'pointer'
},
selected: {
  fill: 'orange'
},
selectedHover: {
  fill: 'blue'
}
},
selectedRegions:selected});

        });

        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();
