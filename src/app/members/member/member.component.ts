import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { member } from 'src/app/interfaces/types';
import { HeaderService } from 'src/app/shared/services/header-services/header.service';
import { MembersService } from 'src/app/shared/services/members-services/members.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit, OnDestroy{

  title:string= "Profile Page";
  member:member | undefined;; 
  errorMessage:string = 'No Error';
  sub!: Subscription;

  constructor(
    private membersService:MembersService,
    private route:ActivatedRoute,
    private headerService:HeaderService,
    ) { }

  ngOnInit(): void {
    let id:string  = this.route.snapshot.paramMap.get('id') !== null ? this.route.snapshot.paramMap.get('id')! : '0';

    this.sub = this.membersService.getMember(parseInt(id)).subscribe({
      next:member=>this.member = member,
      error:err=>this.errorMessage = err
    });
    this.headerService.setHeader({
      title: this.title || '',
      back: true,
    });

  }
  
  ngOnDestroy():void{
    this.sub.unsubscribe();
  }

}
