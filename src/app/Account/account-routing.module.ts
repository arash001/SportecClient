import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // { path: 'confirm-email', component: ConfirmEmailComponent },
  // { path: 'send-email/:mode', component: SendEmailComponent },
  // { path: 'reset-password', component: ResetPasswordComponent },
  // { path: 'register/third-party/:provider', component: RegisterWithThirdPartyComponent },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class AccountRoutingModule { }
