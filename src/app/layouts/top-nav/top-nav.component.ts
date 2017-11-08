import { browser } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})

export class TopNavComponent implements OnInit {
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
