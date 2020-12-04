import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-macth',
  templateUrl: './macth.page.html',
  styleUrls: ['./macth.page.scss'],
})
export class MacthPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

}

