import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {
  spMenuAttributes = {
    'crossorigin': 'anonymous',
    'data-host': 'https://kassovitz.us.qlikcloud.com'
  }

  constructor() { }

  ngOnInit(): void {
    console.log('callback', window.location.href);
    debugger;
    // set the spMenuAttributes dataHost properly
  }

  onReady() {

  }

  onError() {

  }
}
