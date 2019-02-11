import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
interface IImage {
  title: string;
  src: string;
}
@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.scss']
})

export class VirtualScrollComponent implements OnInit {
  virtual;
  images: IImage[] = Array.from(new Array(1000), (x, i) => ({
    title: `Image #${i}`,
  src: `https://picsum.photos/200/?${i}`
  }));

  observableImages = new BehaviorSubject<IImage[]>(this.images);
  constructor() { }

  ngOnInit() {
    this.virtual = true;
  }


}
