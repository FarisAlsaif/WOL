import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/shared/services/header-services/header.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit, OnDestroy {



  constructor(private headerService:HeaderService,
    ) { }

  ngOnInit(): void {
    this.headerService.setHeader({
      title: 'Dashboard',
      back: false,
    });
  }
  ngOnDestroy(): void {
    this.headerService.resetHeader();
  }

}
