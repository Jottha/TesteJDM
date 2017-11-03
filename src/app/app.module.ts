import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { AlunoPage } from '../pages/aluno/aluno';
import { ProfessorPage } from '../pages/professor/professor';
import { RegistrarPage } from '../pages/registrar/registrar';
import { RegistroProvider } from '../providers/registro/registro';

import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";

const firebaseConfig =
{   apiKey: "AIzaSyAViifco7oShEhxV9dBRdPrufsJYk4Ri_U",
    authDomain: "testejdm-93733.firebaseapp.com",
    databaseURL: "https://testejdm-93733.firebaseio.com",
    projectId: "testejdm-93733",
    storageBucket: "",
    messagingSenderId: "739005768558"
}

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    AlunoPage,
    ProfessorPage,
    RegistrarPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    AlunoPage,
    ProfessorPage,
    RegistrarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    RegistroProvider
  ]
})
export class AppModule { }
