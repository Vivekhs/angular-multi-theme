import { Component } from '@angular/core';
import { SwitchThemeService } from './services/switch-theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'multi-theme';

  constructor(private themeService: SwitchThemeService){

  }

  selectTheme(theme: string){
    this.themeService.changeTheme(theme);
  }
}
