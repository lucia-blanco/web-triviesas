import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrivialService {
  base_url = 'https://opentdb.com/api.php?amount=1';
  category;
  geo = [22, 24];
  art = [10, 25, 29];
  his = [23, 20];
  ent = [11, 12, 14, 15, 32];
  sci = [17, 18, 19, 30];
  categories = [this.geo, this.art, this.his, this.ent, this.sci];

  constructor(private http: HttpClient) {}
  getQuestion(category: string, difficulty: string) {
    this.getCategory(category);
    const url = `${this.base_url}&category=${this.category}&difficulty=${difficulty}&type=multiple&encode=url3986`;
    console.log(url);
    return this.http.get(url);
  }

  getCategory(category) {
    this.category = this.categories[category][Math.floor((Math.random() * this.categories[category].length))];
  }
}

