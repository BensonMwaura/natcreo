import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { SeoService } from './../core/services/seo.service';

import { BrandHeader } from './../core/models/brandHeader';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('brandTransition', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(':enter', stagger('1000ms', [
          animate('.6s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({ opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1})
          ]))
        ]), { optional: true })
      ])
    ])
  ]
})
export class AboutComponent implements OnInit {

  brandHeaderDefault: BrandHeader = {
    heading: 'Designing for the best brands',
    statement: 'Connecting people to your brand is at the heart of everything we plan and design.',
    ctaButton: 'Get Started',
    splashImage: '../../assets/img/graphic-design-1.svg'
  }

  constructor(private seo: SeoService) { }

  ngOnInit() {
    this.seo.generateTags({
      title: 'About Us',
      description: 'A professional branding and design studio for the smart business',
      image: 'https://natcreo-390e9.firebaseapp.com/assets/img/Nature.png'
    });
  }

}
