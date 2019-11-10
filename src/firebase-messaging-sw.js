importScripts('https://www.gstatic.com/firebasejs/7.2.3/firebase-app.js');

importScripts('https://www.gstatic.com/firebasejs/7.2.3/firebase-messaging.js');
var config = {
    apiKey: "AIzaSyCfYZQs9xT6pkK-m_7wWDlsoA7GwN3HdMk",
    authDomain: "authvue-d79e2.firebaseapp.com",
    databaseURL: "https://authvue-d79e2.firebaseio.com",
    projectId: "authvue-d79e2",
    storageBucket: "authvue-d79e2.appspot.com",
    messagingSenderId: "220378481886",
    appId: "1:220378481886:web:d58647bcae44f84b08ee4f",
    measurementId: "G-V3TRW0BPCE"
};
firebase.initializeApp(config);
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
    const title = 'Hello World';
    const options = {
        body: payload.data.body
    };
    return self.registration.showNotification(title, options);
});