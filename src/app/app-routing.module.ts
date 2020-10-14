import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component'

import { TemplateDrivenComponent } from './template-driven/template-driven.component';

const routes: Routes = [
  { path: 'template-driven', component: TemplateDrivenComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: '', pathMatch: 'full', redirectTo: 'reactive-form' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
