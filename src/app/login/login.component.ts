import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe(isLoggedIn => {
      if (isLoggedIn) {
        this.router.navigate(['/admin']); // Redireciona para a página administrativa após o login
      } else {
        // Exibir mensagem de erro de login, se necessário
      }
    });
  }
}
