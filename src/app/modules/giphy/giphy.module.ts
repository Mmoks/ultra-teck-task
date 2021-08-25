import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { NgSelectModule } from '@ng-select/ng-select';

import { GiphyComponent } from './containers/giphy/giphy.component';
import { GiphyRoutingModule } from './giphy-routing.module';
import { GiphyApiService } from './services/giphy-api.service';
import { ImagesListComponent } from './components/images-list/images-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SafeUrlPipe } from './pipes/safe-url.pipe';

@NgModule({
  imports: [
    CommonModule,
    GiphyRoutingModule,
    PaginationModule.forRoot(),
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [],
  declarations: [GiphyComponent, ImagesListComponent, SafeUrlPipe],
  providers: [GiphyApiService],
})
export class GiphyModule {}
