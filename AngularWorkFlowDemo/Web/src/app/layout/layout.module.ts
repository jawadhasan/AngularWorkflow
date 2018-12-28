import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TopBarComponent } from './top-bar/top-bar.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { ContentComponent } from './content/content.component';
import { MenuModule } from '../menu/menu.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule,
    SharedModule,
    MenuModule
  ],
  declarations: [
    TopBarComponent,
    TitleBarComponent,
    StatusBarComponent,
    ContentComponent
  ],
  exports: [
    TitleBarComponent,
    ContentComponent,
    StatusBarComponent
  ]
})
export class LayoutModule { }
