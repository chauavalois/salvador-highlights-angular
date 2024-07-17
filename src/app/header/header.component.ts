import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isAdmin = false;

  constructor(private authService: AuthService) {
    this.authService.isAdmin$.subscribe(isAdmin => {  //esse código seria para esconder o link admin apenas para usuários deslogados, mas não funcionou ainda.
      this.isAdmin = isAdmin;
    });
  }

  logout() {
    this.authService.logout();
  }
}
