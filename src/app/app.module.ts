/**
* @Author: Tushar Agarwal(tusharcoder) <tushar>
* @Date:   2017-01-27T23:42:51+05:30
* @Email:  tamyworld@gmail.com
* @Filename: app.module.ts
* @Last modified by:   tushar
* @Last modified time: 2017-01-28T00:43:28+05:30
*/



import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AngularFireModule, AuthProviders, AuthMethods} from 'angularfire2';

	  // Initialize Firebase
	  export const firebaseconfig = {
	      apiKey: "AIzaSyBYpAy1_s_8OL4N3v8bfoqnyTmZMmRpZa4",
	          authDomain: "authentication-38726.firebaseapp.com",
		      databaseURL: "https://authentication-38726.firebaseio.com",
		          storageBucket: "authentication-38726.appspot.com",
			      messagingSenderId: "449467048428"
			   };
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseconfig,{
			provider:AuthProviders.Google,
			method:AuthMethods.Popup
		}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
