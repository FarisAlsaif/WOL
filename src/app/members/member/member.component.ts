import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(
    private membersService:MembersService,
    private route:ActivatedRoute,
    ) { }

  ngOnInit(): void {
    let id:string  = this.route.snapshot.paramMap.get('id') !== null ? this.route.snapshot.paramMap.get('id')! : '0';

    this.sub = this.membersService.getMember(parseInt(id)).subscribe({
      next:member=>this.member = member,
      error:err=>this.errorMessage = err
    });
    console.log(this.errorMessage);
  }
  
  ngOndestroy():void{
    this.sub.unsubscribe();
  }

}
