import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { NewsService } from '../services/news.service';
import { Article } from '../model/article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  @Input()
  articleList: Array<Article>;
  newsSubscription: any;


  constructor(private newsService: NewsService) {

    this.articleList = new Array<Article>();
  }
  ngOnInit() {
    this.getRawData();
    console.log(this.articleList.length);

  }
  getRawData() {
    this.newsSubscription = this.newsService.getData('top-headlines?country=us').subscribe
      (data => {
       this.articleList = data.articles;
      });


  }
  navigate(id: number, article: Article) {
    console.log('index: ' + id);
    console.log(article);
  }

  ngOnDestroy() {
    this.newsSubscription.unsubscribe();
  }
}
