import {Component, OnInit} from '@angular/core';
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'metis-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
              public translate: TranslateService) {
    translate.addLangs(['stix1', 'stix2']);
    translate.setDefaultLang('stix2');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/stix1|stix2/) ? browserLang : 'stix2');
    translate.onLangChange.subscribe((event: LangChangeEvent) => {
    });
  }

  ngOnInit() {
  }

}
