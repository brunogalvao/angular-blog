import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  photoCover: string = '';
  contentTitle: string = '';
  contentDescription: string = '';

  // icone
  faArrowAltCircleLeft = faArrowAltCircleLeft;

  private id: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => (this.id = value.get('id')));
    this.setValuestoComponent(this.id);
  }

  setValuestoComponent(id: string | null) {
    const result = dataFake.filter((article) => article.id == id)[0];

    this.contentTitle = result.title;
    this.contentDescription = result.description;
    this.photoCover = result.photoCover;
  }
}
