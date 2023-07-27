import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RoutesComponent } from './routes/routes.component';
import { OverviewComponent } from './dashboard/overview/overview.component';
import { SideNavComponent } from './shared/side-nav/side-nav.component';
import { SectionOverviewComponent } from './dashboard/section-overview/section-overview.component';
import { MemberComponent } from './members/member/member.component';
import { AllMembersComponent } from './members/all-members/all-members.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    RoutesComponent,
    OverviewComponent,
    SideNavComponent,
    SectionOverviewComponent,
    MemberComponent,
    AllMembersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpClientModule,
    RouterModule.forRoot([
      {path:'overview', component:OverviewComponent},
      {path:'sections', component:SectionOverviewComponent},
      {path:'members', component:AllMembersComponent},
      {path:'members/:id', component:MemberComponent},
      {path:'', redirectTo:'overview', pathMatch:'full'},
      {path:'**', redirectTo:'overview', pathMatch:'full'},
  ])
  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
