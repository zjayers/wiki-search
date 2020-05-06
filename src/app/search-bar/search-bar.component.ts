import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  @Output() searchSubmitted = new EventEmitter<string>();
  searchTerm = '';

  constructor() {}

  ngOnInit(): void {}

  // Send search term to parent App component
  onFormSubmit(event: any) {
    event.preventDefault();
    this.searchSubmitted.emit(this.searchTerm);
  }
}
