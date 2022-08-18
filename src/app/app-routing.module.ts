import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellLayoutComponent } from '@presentation/layout/shell-layout/shell-layout.component';

const routes: Routes = [
  {
    path: '',
    component: ShellLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'user',
        pathMatch: 'full'
      },
      {
        path: 'user',
        loadChildren: () => import('./presentation/user/user.module').then(m => m.UserModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
