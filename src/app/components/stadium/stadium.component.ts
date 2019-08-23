import { Component, OnInit, Input } from '@angular/core';
import { Stadium } from '../../interfaces/interfaces';

@Component({
  selector: 'app-stadium',
  templateUrl: './stadium.component.html',
  styleUrls: ['./stadium.component.scss'],
})
export class StadiumComponent implements OnInit {

  @Input() stadium: Stadium;

  constructor() { }

  ngOnInit() {}

}
