import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrivialService {
  base_url = 'https://opentdb.com/api.php?amount=1';
  category;
  blue = [22, 24];
  violet = [10, 25, 29];
  yellow = [23, 20];
  pink = [11, 12, 14, 15, 32];
  green = [17, 18, 19, 30];
  orange = [9, 21];
  categories = [this.blue, this.violet, this.yellow, this.pink, this.green, this.orange];

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

