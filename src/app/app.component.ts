import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  searchResults = [];

  constructor(private wikipedia: WikipediaService) {}

  onSearchSubmit(term: string) {
    this.wikipedia
      .search(term) // Retrieve Observable
      .subscribe((values) => {
        this.searchResults = values;
      });
  }
}
