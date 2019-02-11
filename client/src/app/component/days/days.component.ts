import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.scss']
})
export class DaysComponent implements OnInit {
  url: string;
  constructor() { }

  ngOnInit() {
    this.url = 'https://picsum.photos/600/600/?random';
  }

}
