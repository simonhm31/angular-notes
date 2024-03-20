import { Routes } from '@angular/router';
import { TypescriptNotesComponent } from './typescript-notes/typescript-notes.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {path: '', component: HomeComponent, title: 'Home Page'},
  {path: 'typescript', component: TypescriptNotesComponent, title: 'TypeScript Notes'},

];
