import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  searchResults = [];

  constructor(private wiki: WikipediaService) {}

  async onSearchSubmit(searchTerm: string) {
    this.searchResults = await this.wiki.search(searchTerm);
  }
}
