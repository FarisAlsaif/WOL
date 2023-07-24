import { Component } from '@angular/core';
import { section } from 'src/app/interfaces/types';

@Component({
  selector: 'app-section-overview',
  templateUrl: './section-overview.component.html',
  styleUrls: ['./section-overview.component.scss']
})
export class SectionOverviewComponent {
  title:string= "Sections";

  sections: section[] =[
    {
      title:"Support services",
      mission: "Support club events",
      leader: "Faris Alsaif"
    },
    {
      title:"Aldawa",
      mission: "Dawa for Ketab and Sunnah",
      leader: "Jehad Malaka"
    },
    {
      title:"Media",
      mission: "document and publish club events",
      leader: "Rayan"
    },
  ]
}
