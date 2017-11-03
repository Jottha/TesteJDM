import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage, NavParams } from 'ionic-angular';
import { Usuario } from '../../models/usuario';
import { RegistrarPage } from '../registrar/registrar';

import { AngularFireAuth } from "angularfire2/auth";
import { HomePage } from '../home/home';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage
{
  usuario: Usuario;
  constructor(public navCtrl: NavController,
              private afAuth: AngularFireAuth,
              public navParams: NavParams
              )
  {   

  }

  goRegistrar()
  {   
      this.navCtrl.push(RegistrarPage);
  }

  async logarProfessor(usuario: Usuario)
  {   try
      {   const result = this.afAuth.auth.signInWithEmailAndPassword(usuario.email, usuario.senha);
          if(result)
          {
              this.navCtrl.push(HomePage);
          }
      }catch(e){
        console.error(e);
      }   
  }
  async logarAluno(usuario:Usuario)
  {  try
     {  const result = this.afAuth.auth.signInWithEmailAndPassword(usuario.email, usuario.senha);
        if(result)
        {
          this.navCtrl.push(HomePage);
        }
     }catch(e)
     {  
       console.error(e);
     }
  }
}