import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'access',
    pathMatch: 'full'
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'myprofile',
    loadChildren: () => import('./pages/myprofile/myprofile.module').then( m => m.MyprofilePageModule)
  },
  {
    path: 'editmyprofile',
    loadChildren: () => import('./pages/editmyprofile/editmyprofile.module').then( m => m.EditmyprofilePageModule)
  },
  {
    path: 'maintenance',
    loadChildren: () => import('./pages/maintenance/maintenance.module').then( m => m.MaintenancePageModule)
  },
  {
    path: 'maintenancedetails',
    loadChildren: () => import('./pages/maintenancedetails/maintenancedetails.module').then( m => m.MaintenancedetailsPageModule)
  },
  {
    path: 'maintenanceprogress',
    loadChildren: () => import('./pages/maintenanceprogress/maintenanceprogress.module').then( m => m.MaintenanceprogressPageModule)
  },
  {
    path: 'access',
    loadChildren: () => import('./pages/access/access.module').then( m => m.AccessPageModule)
  },
  {
    path: 'reset',
    loadChildren: () => import('./pages/reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./pages/logout/logout.module').then( m => m.LogoutPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
