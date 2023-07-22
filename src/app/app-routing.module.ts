import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'announcements',
    loadChildren: () => import('./announcements/announcements.module').then( m => m.AnnouncementsPageModule)
  },
  {
    path: 'office',
    loadChildren: () => import('./office/office.module').then( m => m.OfficePageModule)
  },
  {
    path: 'studentcouncils',
    loadChildren: () => import('./studentcouncils/studentcouncils.module').then( m => m.StudentcouncilsPageModule)
  },
  {
    path: 'studentorganizations',
    loadChildren: () => import('./studentorganizations/studentorganizations.module').then( m => m.StudentorganizationsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'loginscreen',
    loadChildren: () => import('./loginscreen/loginscreen.module').then( m => m.LoginscreenPageModule)
  },
  {
    path: 'membership',
    loadChildren: () => import('./membership/membership.module').then( m => m.MembershipPageModule)
  },
  {
    path: 'submit-report',
    loadChildren: () => import('./submit-report/submit-report.module').then( m => m.SubmitReportPageModule)
  },
  {
    path: 'renewal',
    loadChildren: () => import('./renewal/renewal.module').then( m => m.RenewalPageModule)
  },
  {
    path: 'certificate',
    loadChildren: () => import('./certificate/certificate.module').then( m => m.CertificatePageModule)
  },
  {
    path: 'requests',
    loadChildren: () => import('./requests/requests.module').then( m => m.RequestsPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'ssc',
    loadChildren: () => import('./ssc/ssc.module').then( m => m.SscPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
