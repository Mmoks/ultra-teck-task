import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { Giphy } from '../../models/giphy.model';

@Component({
  selector: 'app-images-list',
  templateUrl: './images-list.component.html',
  styleUrls: ['./images-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImagesListComponent implements OnInit, OnChanges {
  @Input() gifs: Giphy[] | null = [];
  @Input() totalItems?: number;
  @Input() limit?: number;
  @Input() currentPage: FormControl;

  @Output() loadNewPage = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges() {}

  trackItem(index: number, item: Giphy): string {
    return item.id;
  }

  onPageChange(event: PageChangedEvent): void {
    this.loadNewPage.emit(event.page);
  }
}
