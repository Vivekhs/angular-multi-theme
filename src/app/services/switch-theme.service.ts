import { Injectable } from '@angular/core';
import { LightTheme, DefaultTheme } from '../models/themes';

@Injectable({
  providedIn: 'root'
})
export class SwitchThemeService {

  private currentTheme: string = 'default';
  constructor() { }


  public changeTheme(theme:string): void{
    if(this.currentTheme == theme){
      return;
    }
    this.currentTheme = theme;
    switch(theme){
        case 'light': this.setCSSVariables(new LightTheme().variables);
                    break;
        default: this.setCSSVariables(new DefaultTheme().variables)
    }
  }

  private setCSSVariables(variables: Map<string, string>): void{
    variables.forEach((value, key)=>{
      document.documentElement.style.setProperty(key, value);
    })
    
  }
}
