import { Component, OnInit } from '@angular/core';
import { member } from 'src/app/interfaces/types';
import { MembersService } from 'src/app/services/members-services/members.service';

@Component({
  selector: 'app-all-members',
  templateUrl: './all-members.component.html',
  styleUrls: ['./all-members.component.scss']
})
export class AllMembersComponent implements OnInit{
[x: string]: any;


  private _membersFilter:string = '';
  private _roleFilter:string = ''; 

  constructor(private membersService:MembersService){}

  get roleFilter():string{
    return this._roleFilter;
  }
  set roleFilter(value:string){

  }

  // get membersFilter():string{
  //   return this._membersFilter;
  // }
  set membersFilter(value:string){
    this.filteredMembers = this.filterMembers(value);  
  }
  filteredMembers:member[]= [];


  members:member[] = [];

  ngOnInit(){
    this.members = this.membersService.getMembers();
    this.filteredMembers = this.members;
    this._membersFilter = "";
  }

   filterMembers(filterBy: string): member[] {
    filterBy = filterBy.toLocaleLowerCase(); 
    return this.members.filter((member:member)=>
      member.name.toLocaleLowerCase().includes(filterBy)
    ); 
  }
  

}

