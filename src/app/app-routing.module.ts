import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FixtureComponent } from './Component/fixture/fixture.component';
import { HomeComponent } from './Component/home/home.component';
import { FixtureDetailsComponent } from './Component/fixture-details/fixture-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  //{ path: 'admin', loadChildren: () => import('./admin/admin.module').then(module => module.AdminModule) },
  // Implenting lazy loading by the following format
  { path: 'account', loadChildren: () => import('./Account/account.module').then(module => module.AccountModule) },
  { path: 'fixture', component: FixtureComponent , children:[
    {
      path:'detial', component:FixtureDetailsComponent
    }
  ] },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
