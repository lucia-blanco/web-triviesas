import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrivialService {
  base_url = 'https://opentdb.com/api.php?amount=1';
  category;
  name;
  blue =  {
            category: 'Geography',
            array: [22, 24]
          };
  violet =  {
              category: 'Art & Literature',
              array: [10, 25, 29]
            };
  yellow =  {
              category: 'History and Politics',
              array: [23, 20]
            };
  pink =  {
            category: 'Entertainment',
            array: [11, 12, 14, 15, 32]
          };
  green = {
            category: 'Science',
            array: [17, 18, 19, 30]
          };
  orange = {
              category: 'Sports and General Knowledge',
              array: [9, 21]
           };
  categories = [this.blue, this.violet, this.yellow, this.pink, this.green, this.orange];

  constructor(private http: HttpClient) {}
  getQuestion(category: number, difficulty: string) {
    this.name = this.categories[category].category;
    console.log(this.name);
    this.getCategory(category);
    const url = `${this.base_url}&category=${this.category}&difficulty=${difficulty}&type=multiple&encode=url3986`;
    return this.http.get(url);
  }

  getCategory(category) {
    this.category = this.categories[category].array[Math.floor((Math.random() * this.categories[category].array.length))];
  }
}

