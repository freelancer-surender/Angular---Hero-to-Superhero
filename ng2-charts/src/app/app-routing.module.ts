import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarComponent } from './bar/bar.component';
import { DoughnutComponent } from './doughnut/doughnut.component';
import { HomeComponent } from './home/home.component';
import { LineComponent } from './line/line.component';
import { PieComponent } from './pie/pie.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'line',
    component: LineComponent,
  },
  {
    path: 'bar',
    component: BarComponent,
  },
  {
    path: 'pie',
    component: PieComponent,
  },
  {
    path: 'doughnut',
    component: DoughnutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
