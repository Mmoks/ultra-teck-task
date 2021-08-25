import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'giphy',
    loadChildren: () => import('./modules/giphy/giphy.module').then(m => m.GiphyModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'giphy',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
