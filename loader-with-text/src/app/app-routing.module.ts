import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinationComponent } from './destination/destination.component';
import { ResolveGuard } from './services/resolve.guard';
import { SourceComponent } from './source/source.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'source',
    pathMatch: 'full',
  },
  {
    path: 'source',
    component: SourceComponent,
    resolve: {data: ResolveGuard}
  },
  {
    path: 'destination',
    component: DestinationComponent,
    resolve: {data: ResolveGuard}
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
