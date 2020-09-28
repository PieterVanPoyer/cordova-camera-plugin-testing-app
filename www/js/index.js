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

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');

    setTimeout(() => {
        console.info('opening camera');
        openCamera();
    }, 1000);
}

function setOptions() {
    var options = {
        // Some common settings are 20, 50, and 100
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI,
        // In this app, dynamically set the picture source, Camera or photo gallery
        sourceType: Camera.PictureSourceType.CAMERA,
        encodingType: Camera.EncodingType.JPEG,
        mediaType: Camera.MediaType.PICTURE,
        // allowEdit: true,
        correctOrientation: true,  //Corrects Android orientation quirks,
        saveToPhotoAlbum: true
    }
    return options;
}

function openCamera() {

    var options = setOptions();
    // var func = createNewFileEntry;

    navigator.camera.getPicture(function cameraSuccess(imageUri) {

        console.debug('Got a picture', 'app');

        displayImage(imageUri);
        // You may choose to copy the picture, save it somewhere, or upload.
        // func(imageUri);

    }, function cameraError(error) {
        console.debug('Unable to obtain picture: ' + error, 'app');

    }, options);
}

function displayImage(imgUri) {

    var elem = document.getElementById('imageFile');
    elem.src = imgUri;
}
