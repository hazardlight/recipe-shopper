import * as firebase from 'firebase';
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthService{
  token: string;

  constructor(private router: Router){}

  signupUser(email: string, password: string){
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(
      error => console.log(error)
    );
  }
  signinUser(email: string, password: string){
    this.router.navigate(['/']);
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(
      response => {
        firebase.auth().currentUser.getIdToken()
        .then(
          (token: string) => this.token = token
        )
      }
      //response => console.log(response)
    )
    .catch(
      error => console.log(error)
    );
  }
  getToken(){
    //this is the quick and dirty solution. there is some possibility of returning an expired token here however.
    //It should work for most use cases regardless.
    firebase.auth().currentUser.getIdToken()
    .then(
      (token: string) => this.token = token
    )
    return this.token;
  }
  isAuthenticated(){
    return this.token != null;
  }
  logout(){
    firebase.auth().signOut();
    this.token = null;
  }
}
