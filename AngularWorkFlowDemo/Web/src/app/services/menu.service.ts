import { Injectable } from '@angular/core';

export interface IMenuItem {
    text: string,
    icon: string,
    route:string,
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  items: Array<IMenuItem> = [   
    { text: 'Stepper', icon: 'glyphicon-dashboard', route: '/stepper' },   
    { text: 'Dashboard', icon: 'glyphicon-dashboard', route: '/dashboard' },    
    { text: 'Companies', icon: 'glyphicon-briefcase', route: '/companies' },    
    { text: 'Accounts', icon: 'glyphicon-euro', route: '/accounts' },
    { text: 'Projects', icon: 'glyphicon-dashboard', route: '/projects' },
    { text: 'Vending-Machine', icon: 'glyphicon-dashboard', route: '/vendingMachine' },
  ];
}
