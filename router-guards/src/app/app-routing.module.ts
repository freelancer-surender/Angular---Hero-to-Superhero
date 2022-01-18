import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';
import { EditAboutComponent } from './edit-about/edit-about.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsComponent } from './products/products.component';
import { AuthGuard } from './services/auth.guard';
import { ModuleGuard } from './services/module.guard';
import { NotCompleteGuard } from './services/not-complete.guard';
import { ResolveGuard } from './services/resolve.guard';
import { RoleGuard } from './services/role.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'about',
    component: AboutComponent,
    canActivateChild: [ RoleGuard ],
    children: [{ path: 'edit', component: EditAboutComponent }],
  },
  {
    path: 'products',
    component: ProductsComponent,
    resolve: { data: ResolveGuard }
  },
  {
    path: 'contact',
    component: ContactComponent,
    canDeactivate: [NotCompleteGuard]
  },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  {
    path: 'offers',
    canLoad: [ModuleGuard],
    loadChildren: () =>
      import('./offers/offers.module').then((m) => m.OffersModule),
  },
  { path: 'access-denied', component: AccessDeniedComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
