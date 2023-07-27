import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FixtureComponent } from './Component/fixture/fixture.component';
import { HomeComponent } from './Component/home/home.component';
import { FixtureDetailsComponent } from './Component/fixture-details/fixture-details.component';
import { AuthorizationGuard } from './Shared/guards/authorization.guard';

const routes: Routes = [
  { path: '',     runGuardsAndResolvers: 'always',component: HomeComponent,canActivate:[AuthorizationGuard] },

  { path: 'account',     runGuardsAndResolvers: 'always',loadChildren: () => import('./Account/account.module').then(module => module.AccountModule) },
  { path: 'fixture',     runGuardsAndResolvers: 'always',canActivate:[AuthorizationGuard],component: FixtureComponent , children:[
    {
      path:'detial', component:FixtureDetailsComponent,canActivate:[AuthorizationGuard]
    }
  ] },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
