import { Component, Input, OnInit } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './home.responsive.component.css'],
})
export class HomeComponent implements OnInit {
  homePhotoCover: string = '';
  homeTitle: string = '';
  homeDescription: string = '';

  dataFake = dataFake;

  constructor() {}

  ngOnInit(): void {}
}
