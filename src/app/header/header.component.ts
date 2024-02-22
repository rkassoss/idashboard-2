import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  dropDownData: any;
  // appId="3e76f674-487b-4d47-a284-91b33dad3f0c" sheetId="PSQhqB"
  constructor() {
    this.dropDownData = [
      {label: 'Sales', appId: 'd6152f1d-c366-4471-8aa6-7ae473e63f59', sheetId: 'XuWLHFK'},
      {label: 'Travel', appId: '3e76f674-487b-4d47-a284-91b33dad3f0c', sheetId: 'PSQhqB'},
    ]
  }

  onOptionsSelected(value:string){
      console.log("the selected value is " + value);
  }

  ngOnInit(): void {
  }

}
