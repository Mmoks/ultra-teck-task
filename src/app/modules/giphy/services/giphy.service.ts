import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Pagination } from '../models/api-response.model';

import { Giphy } from '../models/giphy.model';
import { GiphyApiService } from './giphy-api.service';

@Injectable()
export class GiphyService implements OnDestroy {
  private gifsStream$ = new BehaviorSubject<Giphy[]>([]);
  private paginationStream$ = new BehaviorSubject<Pagination>({
    count: 0,
    offset: 0,
    total_count: 0,
  });

  gifs$ = this.gifsStream$.asObservable();
  pagination$ = this.paginationStream$.asObservable();

  get pagination(): Pagination {
    return this.paginationStream$.getValue();
  }

  constructor(private giphyApiService: GiphyApiService) {}

  searchGifs(tags: string[], page: number = 1, overwrite: boolean = true) {
    return this.giphyApiService.searchGifs(tags, page).pipe(
      tap(({ data, pagination }) => {
        const count = overwrite ? data.length : data.length + this.gifsStream$.getValue().length;
        const gifs = overwrite ? data : [...this.gifsStream$.getValue(), ...data];
        this.gifsStream$.next(gifs);
        console.log(gifs)
        this.paginationStream$.next({ ...pagination, count });
      }),
    );
  }

  ngOnDestroy() {
    // GiphyService is provied in giphy component and this service will be destroyed as soon as giphy component
    this.gifsStream$.complete();
  }
}
