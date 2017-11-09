import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  navLinks: any[];

  constructor(router: Router) {
    this.navLinks = [
      { path: '/about', label: 'About' },
      { path: '/products', label: 'Products' },
      { path: '/features', label: 'Features' },
      { path: '/dashboard', label: 'Dashboard' },
      { path: '/settings', label: 'Settings' }
    ];
  }

  ngOnInit() {
  }

}
