import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideBarService {

  constructor() { }

  getPages():any{
    return [{
      title:"Dashboard",
      path: "",
      icon:"fa-solid fa-house"
  
    },
    {
      title:"Section1",
      path: "",
      icon:"fa-solid fa-users"
    },
    {
      title:"Section2",
      path: "",
      icon:""
    },
    {
      title:"Section3",
      path: "",
      icon:""
    },
  ]
  }
}
