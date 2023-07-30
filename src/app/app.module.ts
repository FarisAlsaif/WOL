import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RoutesComponent } from './routes/routes.component';
import { OverviewComponent } from './dashboard/overview/overview.component';
import { SectionOverviewComponent } from './dashboard/section-overview/section-overview.component';
import { MemberComponent } from './members/member/member.component';
import { AllMembersComponent } from './members/all-members/all-members.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { MembersModule } from './members/members.module';
@NgModule({
  declarations: [
    AppComponent,
    RoutesComponent,
    OverviewComponent,
    SectionOverviewComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpClientModule,
    RouterModule.forRoot([
      {path:'overview',
       component:OverviewComponent
      },
      {path:'sections',
       component:SectionOverviewComponent
      },
      {path:'', redirectTo:'overview', pathMatch:'full'},
      {path:'**', redirectTo:'overview', pathMatch:'full'},
  ]),
  SharedModule,
  MembersModule,
  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
