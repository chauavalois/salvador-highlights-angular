import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showFooter: boolean = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {  // Use `any` type here to avoid type mismatch
      this.showFooter = !this.isAdminRoute(event.urlAfterRedirects);
    });
  }

  isAdminRoute(url: string): boolean {
    const adminRoutes = ['/admin', '/usuarios', '/editar-home', '/editar-sobre'];
    return adminRoutes.some(route => url.startsWith(route));
  }
}
