import { Component,NgModule, OnInit } from '@angular/core';
import { page } from 'src/app/interfaces/types';
import { SideBarService } from 'src/app/shared/services/side-bar-services/side-bar.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})


export class SideNavComponent implements OnInit {

  constructor(private sideBarService:SideBarService){}
  pages:page[] = [];

  ngOnInit(): void {
    this.pages = this.sideBarService.getPages();
  }

}
