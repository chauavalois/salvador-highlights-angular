import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  username = '';
  password = '';
  registerError = false;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.register(this.username, this.password).subscribe(isRegistered => {
      if (isRegistered) {
        this.router.navigate(['/login']); // Redireciona para a página de login após o registro
      } else {
        this.registerError = true; // Exibir mensagem de erro de registro
      }
    });
  }
}
