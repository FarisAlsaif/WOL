import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HeaderService, header } from 'src/app/services/header-services/header.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title: string='false';
  @Input() back: boolean=false;
  private headerSubscription: Subscription;


  constructor(private location: Location, private headerService: HeaderService) {
    this.headerSubscription = this.headerService.headerObservable$.subscribe((headerDetails: header) => {
      this.title = headerDetails.title || ''; 
      this.back = headerDetails.back || false;

    });
  }

  

  ngOnInit(): void {
  }
  goBack(){
    this.location.back()
  }

}
