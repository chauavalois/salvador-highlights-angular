import { Component, OnInit } from '@angular/core';
import { IUsuario } from '../models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  public usuario : IUsuario = {
    id:0,
    login:"",
    senha:""
  }

  ngOnInit(): void {
  }

  logar(usuario:IUsuario) {
    // criação de método que irá acionar um serviço para receber a variável login, contendo login e senha. O serviço irá 
    // até o banco de dados verificar se existe um uruário condizente com as informações trazidas
    // teremos que criar um serviço especifico para o login. a pergunta é, podemos usar o mesmo banco de dados onde estão as noticias?
  }

}
