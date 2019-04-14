import { stringify } from '@angular/core/src/util';

export interface Theme {
    theme: string;
    variables: Map<string, string>;
}

export class DefaultTheme implements Theme {
    theme: 'default';
    variables: Map<string, string>;
    constructor(){
        this.variables = new Map<string, string>();
        this.variables.set('--primary-color', 'black');
        this.variables.set('--secondary-color', 'blue');
        this.variables.set('--bg-header','green');
    }

}

export class LightTheme implements Theme {
    theme: 'default';
    variables: Map<string, string>;
    constructor(){
        this.variables = new Map<string, string>();
        this.variables.set('--primary-color', 'red');
        this.variables.set('--secondary-color', 'violet');
        this.variables.set('--bg-header','grey');
    }

}