import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { section } from 'src/app/interfaces/types';
import { HeaderService } from 'src/app/shared/services/header-services/header.service';
import { SectionsService } from 'src/app/shared/services/sections-services/sections.service';

@Component({
  selector: 'app-section-overview',
  templateUrl: './section-overview.component.html',
  styleUrls: ['./section-overview.component.scss']
})
export class SectionOverviewComponent implements OnInit, OnDestroy {
  title:string= "Sections";
  sections: section[] = []
  errorMessage:string = 'No Error';
  sub!: Subscription;

  constructor(private sectionsService:SectionsService,
    private headerService:HeaderService,
    ) { }

  ngOnInit(): void {
    this.sub = this.sectionsService.getSections().subscribe({
      next:sections=>this.sections = sections,
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

}
