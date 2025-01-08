
import { Routes } from '@angular/router';
import { ArbiTapComponent } from './arbi-tap/arbi-tap.component';
import { FaqComponent } from './faq/faq.component';
import { InviteComponent } from './invite/invite.component';
import { WalletComponent } from './wallet/wallet.component';
import { BoostComponent } from './boost/boost.component';

export const routes: Routes = [
    // { path: '', redirectTo: '/trade', pathMatch: 'full' },
  { path: 'trade', component: ArbiTapComponent },
  { path: 'invite', component:  InviteComponent}, // Replace with InviteComponent when created
  { path: 'wallet', component: WalletComponent }, // Replace with WalletComponent when created
  { path: 'faq', component: FaqComponent },    // Replace with FaqComponent when created
  { path: 'boost', component: BoostComponent },    // Replace with BoostComponent when created

];
