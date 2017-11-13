import { Component, OnInit } from '@angular/core';
import { SeoService } from './../core/services/seo.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private seo: SeoService) { }

  ngOnInit() {
    this.seo.generateTags({
      title: 'About Us',
      description: 'A professional branding and design studio for the smart business',
      image: 'https://natcreo-390e9.firebaseapp.com/assets/img/Nature.png'
    });
  }

}
