import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: AngularFireAuth, private afs: AngularFirestore) {}

  signIn(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  signUp(email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  setUserData(user: any, fullName: string) {
    let userRef = this.afs.doc(`users/${user.uid}`);
    let userData = {
      uid: user.uid,
      email: user.email,
      fullName
    };
    return userRef.set(userData, { merge: true });
  }

  getAuthState() {
    return this.auth.authState;
  }
}
