import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReativoComponent } from './reativo/reativo.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';

const routes: Routes = [
  { path: 'template-driven', component: TemplateDrivenComponent },
  { path: 'reativo', component: ReativoComponent },
  { path: '', pathMatch: 'full', redirectTo: 'template-driven' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
