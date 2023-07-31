import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RoutesComponent } from './routes/routes.component';
import { OverviewComponent } from './dashboard/overview/overview.component';
import { SectionOverviewComponent } from './dashboard/section-overview/section-overview.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { MembersModule } from './members/members.module';
import { FirebaseTSApp } from 'firebasets/firebasetsApp/firebaseTSApp';
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
export class AppModule { 
  cpnstructor(){
 
    FirebaseTSApp.init(
      {
        apiKey: "AIzaSyBEn3JaB_cGJTiIeEv9HDJzuxggb9Q-5aQ",
        authDomain: "wol1-deee4.firebaseapp.com",
        projectId: "wol1-deee4",
        storageBucket: "wol1-deee4.appspot.com",
        messagingSenderId: "640323914957",
        appId: "1:640323914957:web:18fbb3920beefe98b4ed84"
      }
    )
  }

}
