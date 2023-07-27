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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
