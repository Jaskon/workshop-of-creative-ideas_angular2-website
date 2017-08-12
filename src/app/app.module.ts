import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { AfficheComponent } from './content/affiche/affiche.component';
import { ProjectsComponent } from './content/projects/projects.component';

import { AppRoutingModule }     from './app-routing.module';
import { AffichesComponent } from './content/affiches/affiches.component';
import { ProjectComponent } from './content/project/project.component';
import { TeploobmenComponent } from './content/teploobmen/teploobmen.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    AfficheComponent,
    ProjectsComponent,
    AffichesComponent,
    ProjectComponent,
    TeploobmenComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
