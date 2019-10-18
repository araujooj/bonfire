
//Arquivo de conexão e importação das funções do firebase
import app from "firebase/app";
import 'firebase/firestore' 
import 'firebase/auth'

//Conexão
const firebaseConfig = {
  apiKey: "AIzaSyDJX-0RxurgFU5JgxjsXp8Paon8D3_HwMI",
  authDomain: "bonfire-web.firebaseapp.com",
  databaseURL: "https://bonfire-web.firebaseio.com",
  projectId: "bonfire-web",
  storageBucket: "bonfire-web.appspot.com",
  messagingSenderId: "325894508531",
  appId: "1:325894508531:web:99ef309e38218486"
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    this.db = app.firestore();
  }

  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.auth.signOut();
  }

  //INCLUSÃO
  async register(name, email, password) {
    await this.auth.createUserWithEmailAndPassword(email, password);
    return this.auth.currentUser.updateProfile({
      displayName: name
    });
  }

  //INCLUSÃO
  addQuote(quote) {
    if (!this.auth.currentUser) {
      return alert("Sem autorização");
    }

    return this.db
      .doc(`users_codedamn_video/${this.auth.currentUser.uid}`)
      .set({
        quote
      });
  }

  isInitialized() {
    return new Promise(resolve => {
      this.auth.onAuthStateChanged(resolve);
    });
  }

  //CONSULTA
  getCurrentUsername() {
    return this.auth.currentUser && this.auth.currentUser.displayName;
  }

  //CONSULTA
  async getCurrentUserQuote() {
    const quote = await this.db
      .doc(`users_codedamn_video/${this.auth.currentUser.uid}`)
      .get();
    return quote.get("quote");
  }

}
 



export default new Firebase();