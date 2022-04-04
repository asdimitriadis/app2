import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';

export interface UserStatesItem {
  username: string;
  Editing: number;
  Candidate: number;
  Published: number;
  total: number;
}

@Component({
  selector: 'metis-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {


  constructor(
              private router: Router) {
  }

  ngOnInit() {
  }

}
