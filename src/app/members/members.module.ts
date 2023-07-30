import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllMembersComponent } from './all-members/all-members.component';
import { MemberComponent } from './member/member.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MemberComponent,
    AllMembersComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path:'members',
        component:AllMembersComponent
      },
      {path:'members/:id',
        component:MemberComponent,
      },
    ]),
  ],
  exports:[
    MemberComponent,
    AllMembersComponent,

  ]
})
export class MembersModule { }
