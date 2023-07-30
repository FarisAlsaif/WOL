import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideBarService {

  constructor() { }

  getPages():any{
    return [{
      title:"dashboard",
      path: "",
      icon:"fa-solid fa-house"
  
    },
    {
      title:"sections",
      path: "",
      icon:"fa-solid fa-users"
    },
    {
      title:"members",
      path: "",
      icon:""
    },
    {
      title:"section3",
      path: "",
      icon:""
    },
  ]
  }
}
