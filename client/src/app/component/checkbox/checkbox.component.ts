import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  url: string;
  constructor() { }

  ngOnInit() {
    this.url = 'https://picsum.photos/800/800/?random';
  }
}
