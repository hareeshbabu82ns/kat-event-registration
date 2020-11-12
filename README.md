### Karumari Amman Temple Event Registration App

##### Firebase Connectivity
* firebase app - **karumari-amman-temple-ca**
* default url - **https://karumari-amman-temple-ca.web.app**
* setting firebase
```sh
$ npm -g install firebase-tools
$ firebase login
$ firebase init
$ firebase use
```
* deploying
```sh
$ npm build
# for preview/test the app
$ firebase hosting:channel:deploy preview_name
# for production
$ firebase deploy
```