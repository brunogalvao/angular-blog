import { Component, OnInit } from '@angular/core';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css'],
})
export class MenuBarComponent implements OnInit {
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faUser = faUser;

  constructor() {}

  ngOnInit(): void {}
}
