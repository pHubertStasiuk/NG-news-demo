import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Article } from '../model/article';

const apiKey = environment.apiKey;
const apiURL = environment.apiURL;

const params = new HttpParams().set('apiKey', apiKey);

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getData(url: string): Observable<Article> {
    return this.http.get<Article>(`${apiURL}/${url}`, { params });
  }


}
