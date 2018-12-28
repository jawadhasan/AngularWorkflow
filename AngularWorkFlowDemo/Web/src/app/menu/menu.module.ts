import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MenuComponent } from './menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    MenuComponent,
    MenuItemComponent
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }
