# cordova-camera-plugin-testing-app

Setup

````
npm i
npm run cordova-prepare
npm run build-for-android
npm run emulate-for-android
````

The app should open inside the emulator.

Automatically the camera opens. (Settings are set with ``saveToPhotoAlbum: true`` )
When you take a picture and confirm the picture, the image should be visible on the webview.
