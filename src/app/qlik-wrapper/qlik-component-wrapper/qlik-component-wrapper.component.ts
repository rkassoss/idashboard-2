import {Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ScriptService } from 'ngx-script-loader';

@Component({
  selector: 'app-qlik-component-wrapper',
  templateUrl: './qlik-component-wrapper.component.html',
  styleUrls: ['./qlik-component-wrapper.component.scss']
})

export class QlikComponentWrapperComponent implements OnInit, OnChanges {

  // spMenuAttributes = {
  //   'crossorigin': 'anonymous',
  //   'data-host': 'https://kassovitz.us.qlikcloud.com',
  //   'data-client-id':"2e2c3a66c97818c67a21d21c1c27d788",
  //   'data-redirect-uri':"http://localhost:4200/callback",
  //   'data-access-token-storage':"session",
  //   'data-auto-redirect': 'true',
  // }
  
  @Input() dataHost: any;
  @Input() clientId: any;
  @Input() appId: any;
  @Input() sheetId: any;
  spMenuAttributes: { crossorigin: string; 'data-host': any; 'data-client-id': any; 'data-redirect-uri': string; 'data-access-token-storage': string; 'data-auto-redirect': string; } | undefined;
  
  constructor(private scriptService: ScriptService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    // throw new Error('Method not implemented.');
    // if (changes['dataHost'].currentValue != changes['dataHost'].previousValue || changes['clientId'].currentValue != changes['clientId'].previousValue) { 
    //   // if host is different, reload the qlik-embed script // it always fire since previous value is undefined...
    //   console.log('changes happened', changes);

    //   this.spMenuAttributes = {
    //     'crossorigin': 'anonymous',
    //     'data-host': this.dataHost,
    //     'data-client-id': this.clientId,
    //     'data-redirect-uri':"http://localhost:4200/callback",
    //     'data-access-token-storage':"session",
    //     'data-auto-redirect': 'true',
    //   }
    //   this.scriptService.loadScript('https://cdn.jsdelivr.net/npm/@qlik/embed-web-components',this.spMenuAttributes).subscribe(() => {
    //     console.log('script loaded again');
    //   });
    // }
  }
  
  ngOnInit(): void {
    this.spMenuAttributes = {
      'crossorigin': 'anonymous',
      'data-host': this.dataHost,
      'data-client-id': this.clientId,
      'data-redirect-uri':"http://localhost:4200/callback",
      'data-access-token-storage':"session",
      'data-auto-redirect': 'true',
    }
    this.scriptService.loadScript('https://cdn.jsdelivr.net/npm/@qlik/embed-web-components',this.spMenuAttributes).subscribe(() => {
      console.log('script loaded');
    });

  }

  onReady() {

  }

  onError() {

  }
}
