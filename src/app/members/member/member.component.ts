import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { member } from 'src/app/interfaces/types';
import { MembersService } from 'src/app/services/members-services/members.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent {

  member:member | undefined;; 
  errorMessage:string = 'No Error';
  sub!: Subscription;

  constructor(private membersService:MembersService) { }

  ngOnInit(): void {
    this.sub = this.membersService.getMember(1).subscribe({
      next:member=>this.member = member,
      error:err=>this.errorMessage = err
    });
    console.log(this.errorMessage);
  }
  
  ngOndestroy():void{
    this.sub.unsubscribe();
  }

}
