import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { member } from 'src/app/interfaces/types';
import { HeaderService } from 'src/app/shared/services/header-services/header.service';
import { MembersService } from 'src/app/shared/services/members-services/members.service';

@Component({
  selector: 'app-all-members',
  templateUrl: './all-members.component.html',
  styleUrls: ['./all-members.component.scss']
})
export class AllMembersComponent implements OnInit, OnDestroy{

  title:string = 'All Members';
  private _membersFilter:string = "";
  private _roleFilter:string = '';
  errorMessage:string = 'No Error'; 
  sub!: Subscription;

  constructor(private membersService:MembersService,
    private headerService:HeaderService,
    ){}

  get roleFilter():string{
    return this._roleFilter;
  }
  set roleFilter(value:string){

  }
  set membersFilter(value:string){
    this.filteredMembers = this.filterMembers(value);  
  }
  filteredMembers:member[]= [];

  members:member[] = [];

  ngOnInit(){
    this.sub = this.membersService.getMembers().subscribe({
      next:members=>{this.members = members,
      this.filteredMembers = this.members;},
      error:err=>this.errorMessage = err

    });
    this.headerService.setHeader({
      title: this.title,
      back: true,
    });
  }
  ngOnDestroy(): void {
    this.headerService.resetHeader();
    this.sub.unsubscribe();
  }
   filterMembers(filterBy: string): member[] {
    filterBy = filterBy.toLocaleLowerCase(); 
    return this.members.filter((member:member)=>
      member.name.toLocaleLowerCase().includes(filterBy)
    ); 
  }
}

