import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavComponent } from './components/nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public currentLang!: string;
  constructor(private translate: TranslateService) {
    this.currentLang = translate.currentLang || translate.getDefaultLang();
  }

  public changeLanguage() {
    this.currentLang === 'es'
      ? this.translate.use('en')
      : this.translate.use('es');
    this.currentLang = this.translate.currentLang;
  }

  title = 'PortfolioApp-ng16-StandAlone-Signals-RxJS-SCSS';
}
