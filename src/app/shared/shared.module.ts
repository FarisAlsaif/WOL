import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FLUCPipe } from './pips/fluc.pipe';



@NgModule({
  declarations: [
    SideNavComponent,
    HeaderComponent,
    NotFoundPageComponent,
    FLUCPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path:'NotFound',
        component:NotFoundPageComponent
        },
    ]), 
  ],
  exports:[
    SideNavComponent,
    HeaderComponent,
    NotFoundPageComponent,
    FLUCPipe,
    NotFoundPageComponent,
  ]


})
export class SharedModule { }
