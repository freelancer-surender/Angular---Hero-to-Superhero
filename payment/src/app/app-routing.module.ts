import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  { path: '', redirectTo: 'cart', pathMatch: 'full' },
  { path: 'cart', component: CartComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'confirm', component: ConfirmationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
