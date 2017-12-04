import { Component, OnInit } from '@angular/core';
import { CompanyIcon } from './../../models/companyIcon';

@Component({
  selector: 'app-company-icon',
  templateUrl: './company-icon.component.html',
  styleUrls: ['./company-icon.component.scss']
})
export class CompanyIconComponent implements OnInit {

  defaultCompanyIcon: CompanyIcon = {
    name: 'Nature Creations',
    image: '../assets/iconx/favicon-32x32.png',
    alt: 'NC'
  }
  constructor() { }

  ngOnInit() {
  }

}
