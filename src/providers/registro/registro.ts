import { Usuario } from "../../models/usuario";
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';


@Injectable()
export class RegistroProvider
{
    constructor(public afAuth: AngularFireAuth)
    {   
        console.log('Hello LoginProvider Provider');

    }

    async registrarSe(usuario: Usuario)
    {   try
        {   const result = await this.afAuth.auth.createUserWithEmailAndPassword(usuario.email, usuario.senha);
            console.log(result);
        }catch(e)
        {
            console.error(e);
        }

    }
}