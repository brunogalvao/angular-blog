import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  photoCover: string =
    'https://br.web.img3.acsta.net/c_310_420/pictures/18/06/29/00/35/0101925.jpg';
  contentTitle: string = 'titulo';
  contentDescription: string = 'testando';

  private id: string | null = '0';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => {
      this.id = value.get('id');
    });
  }

  setValuestoComponent(id: string) {
    const result = dataFake.filter((article) => article.id);
  }
}
