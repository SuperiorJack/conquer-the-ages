//import firebase from 'firebase';
import { firebaseConfig } from '../../config.js';

const valid = firebaseConfig  && firebaseConfig.apiKey && firebaseConfig.projectId;

//firebase.initializeApp(firebaseConfig);
//const firebaseAuth = firebase.auth;

class FirebaseHelper {
  isValid = valid;
  constructor() {
	  console.log("constructor")
  }
  login(provider, info) {
	return true
  }
  logout() {
	return true
  }
  isAuthenticated() {
	return true
  }
  resetPassword(email) {
    return true
  }
}

export default new FirebaseHelper();
