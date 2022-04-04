import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import WebFont from 'webfontloader';
import {MatIconRegistry} from '@angular/material';

@Component({
  selector: 'metis-webapp',
  templateUrl: './metis-web.component.html',
  styleUrls: ['./metis-web.component.css']
})
export class MetisWebComponent implements OnInit {

  constructor(private router: Router,
              private matIconRegistry: MatIconRegistry) {
  }

  ngOnInit(): void {
    WebFont.load({
      google: {
        families: ['Roboto']
      }
    });

    this.matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
  }

  isAuthenticated() {
  }

}
