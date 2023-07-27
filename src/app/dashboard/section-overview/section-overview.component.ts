import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { section } from 'src/app/interfaces/types';
import { SectionsService } from 'src/app/services/sections-services/sections.service';

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
  constructor(private sectionsService:SectionsService) { }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.sub = this.sectionsService.getSections().subscribe({
      next:sections=>this.sections = sections,
      error:err=>this.errorMessage = err
    });
    console.log(this.errorMessage);
  }
}
