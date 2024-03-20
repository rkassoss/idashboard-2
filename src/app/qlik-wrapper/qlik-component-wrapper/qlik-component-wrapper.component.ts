import {Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ScriptService } from 'ngx-script-loader';

@Component({
  selector: 'app-qlik-component-wrapper',
  templateUrl: './qlik-component-wrapper.component.html',
  styleUrls: ['./qlik-component-wrapper.component.scss']
})

export class QlikComponentWrapperComponent implements OnInit {

  @Input() ui: any;
  @Input() dataHost: any;
  @Input() clientId: any;
  @Input() appId: any;
  @Input() sheetId: any;
  @Input() objectId: any;
  spMenuAttributes: { crossorigin: string; 'data-host': any; 'data-client-id': any; 'data-redirect-uri': string; 'data-access-token-storage': string; 'data-auto-redirect': string; } | undefined;
  
  constructor(private scriptService: ScriptService) {
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
