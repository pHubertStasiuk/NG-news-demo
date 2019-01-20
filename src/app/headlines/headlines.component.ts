import { Component, OnInit, Input } from '@angular/core';
import { NewsService } from '../services/news.service';
import { Article } from '../model/article';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.component.html',
  styleUrls: ['./headlines.component.css']
})
export class HeadlinesComponent implements OnInit {


  articles:  Array<Article>;

  categories = [
    'World',
    'India',
    'Business',
    'Technology',
    'Entertainment',
    'Sports',
    'Science'
  ];

  constructor(private newsService: NewsService) {
    this.articles = new Array<Article>();
  }

  ngOnInit() {
    this.getData(this.categories[0].toLowerCase());
    console.log(this.articles);
  }

  public onGetCategoryData(category: string) {
    this.getData(category);
    console.log(this.articles);
  }

  private getData(category: string) {
    this.newsService.getData(`everything?q=${category.toLowerCase()}`).subscribe(data => this.articles = data.articles);
  }

}
