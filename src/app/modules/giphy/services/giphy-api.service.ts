import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { ApiResponse } from '../models/api-response.model';
import { Giphy } from '../models/giphy.model';

@Injectable()
export class GiphyApiService {
  private readonly apiPath = `https://api.giphy.com/v1/gifs/search?api_key=${environment.apiKey}`;

  constructor(private httpClient: HttpClient) {}

  searchGifs(tags: string[], page: number = 1, limit: number = 9): Observable<ApiResponse<Giphy>> {
    return this.httpClient.get<ApiResponse<Giphy>>(
      `${this.apiPath}&q=${tags.join(' ')}&page=${page}&limit=${limit}&offset=${
        limit * page
      }&type=gifs`,
    );
  }
}
