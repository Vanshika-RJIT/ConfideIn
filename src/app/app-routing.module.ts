import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ConfideInGuardGuard } from './guard/confide-in-guard.guard';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    // loadChildren: () =>
    //   import('./components/home/home.module').then((m) => m.HomeModule),
    component: HomeComponent,
    canActivate: [ConfideInGuardGuard],
  },
  {
    path: 'login',
    component: RegisterComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
