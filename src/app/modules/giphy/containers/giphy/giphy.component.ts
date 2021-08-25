import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { of, Subject } from 'rxjs';
import { distinctUntilChanged, switchMap, takeUntil, tap } from 'rxjs/operators';

import { GiphyService } from '../../services/giphy.service';

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [GiphyService],
})
export class GiphyComponent implements OnInit, OnDestroy {
  private destroyed$ = new Subject<boolean>();

  tags = new FormControl([]);
  currentPage = new FormControl(1);
  items: string[] = [];

  constructor(public giphyService: GiphyService) {}

  ngOnInit(): void {
    this.tags.valueChanges
      .pipe(
        distinctUntilChanged((x: string[], y: string[]) => x.join(' ') === y.join(' ')),
        switchMap(tags => this.giphyService.searchGifs(tags)),
        tap(() => this.currentPage.patchValue(1)),
        takeUntil(this.destroyed$),
      )
      .subscribe();
  }

  addTag(tag: string): Promise<string> {
    this.items.push(tag);
    return of(tag).toPromise();
  }

  loadNewPage(page: number): void {
    this.giphyService
      .searchGifs(this.tags.value, page)
      .pipe(takeUntil(this.destroyed$))
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
