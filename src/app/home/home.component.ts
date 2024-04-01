import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

// Options for the dropdown
options = [
  { value: 'fEAaZ', display: 'Option 1' },
  { value: 'Xbapgf', display: 'Option 2' },
  { value: 'ANKqynt', display: 'Option 3' }
];

// Property to hold the selected value
selectedValue = this.options[0].value; // Default to the first option

// Function to handle selection change
onSelectionChange(): void {
  console.log("Selected value changed to:", this.selectedValue);
}

  constructor() { }

  ngOnInit(): void {

  }

}
