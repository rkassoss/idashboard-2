import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  spMenuAttributes = {
    'crossorigin': 'anonymous',
    'data-host': 'https://kassovitz.us.qlikcloud.com',
    'data-client-id':"2e2c3a66c97818c67a21d21c1c27d788",
    'data-redirect-uri':"http://localhost:4200/callback",
    'data-access-token-storage':"session",
    'data-auto-redirect': 'true',
  }

  title = 'idashboard';

  constructor() {
  }

  ngOnInit(): void {
  }

  onReady() {

  }

  onError() {

  }
}
