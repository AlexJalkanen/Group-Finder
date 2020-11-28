import firebase from 'firebase'
import firebaseui from 'firebaseui';

const config = {
    apiKey: "AIzaSyDz2K43fHV9iNXeyrKvF_-seg3x4ix8ZOw",
    authDomain: "group-finder-296809.firebaseapp.com",
    databaseURL: "https://group-finder-296809.firebaseio.com",
    projectId: "group-finder-296809",
    storageBucket: "group-finder-296809.appspot.com",
    messagingSenderId: "772061849662",
    appId: "1:772061849662:web:5c0131705bde63362c496f",
    measurementId: "G-QD8TQ1KRHR"
};

const auth = {
  context: null,
  uiConfig: null,
  ui: null,

  init(context) {
    this.context = context;

    firebase.initializeApp(config);
    this.uiConfig = {
      signInSuccessUrl: 'dashboard',
      signInOptions: [
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ]
    }
    this.ui = new firebaseui.auth.AuthUI(firebase.auth());

    firebase.auth().onAuthStateChanged((user) => {
      this.context.$store.dispatch('user/setCurrentUser')

      let requireAuth = this.context.$route.matched.some(record => record.meta.requireAuth)
      let guestOnly = this.context.$route.matched.some(record => record.meta.guestOnly)

      if(requireAuth && !user) this.context.$router.push('auth')
      else if (guestOnly && user) this.context.$router.push('dashboard')
    });
  },
  authForm(container) {
    this.ui.start(container, this.uiConfig);
  },
  user() {
    return this.context ? firebase.auth().currentUser : null;
  },
  logout() {
    firebase.auth().signOut();
  }
}

export default auth;