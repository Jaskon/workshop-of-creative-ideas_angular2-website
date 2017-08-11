import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AffichesComponent }    from './content/affiches/affiches.component';
import { ProjectsComponent }    from './content/projects/projects.component';
import { TeploobmenComponent }  from './content/teploobmen/teploobmen.component';

import { AfficheComponent }     from './content/affiche/affiche.component';
import { ProjectComponent }     from './content/project/project.component';

const routes: Routes = [
  { path: '', redirectTo: '/affiches', pathMatch: 'full' },

  { path: 'affiches', component: AffichesComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'fools-funny-crew', component: ProjectsComponent },
  { path: 'teploobmen', component: ProjectsComponent },
  { path: 'detskaya-studiya-esteticheskogo-razvitiya', component: ProjectsComponent },
  { path: 'horeografiya', component: ProjectsComponent },

  { path: 'affiche/:id',  component: AfficheComponent },
  { path: 'project/:id', component: ProjectComponent },

  { path: '**', redirectTo: '/affiches' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }