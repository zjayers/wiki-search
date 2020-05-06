import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WikipediaService {
  url = 'https://en.wikipedia.org/w/api.php?origin=*';

  params = {
    action: 'query',
    list: 'search',
    srsearch: '',
    format: 'json',
  };

  constructor() {}

  public async search(searchTerm: string) {
    this.url = 'https://en.wikipedia.org/w/api.php?origin=*';
    this.params.srsearch = searchTerm;
    Object.keys(this.params).forEach((key) => {
      this.url += '&' + key + '=' + this.params[key];
    });
    const res = await fetch(this.url);
    const data = await res.json();
    return data.query.search;
  }
}
