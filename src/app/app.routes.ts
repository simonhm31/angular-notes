import { Routes } from '@angular/router';
import { TypescriptNotesComponent } from './typescript/typescript-notes.component';
import { HomeComponent } from './home/home.component';
import { AngularFundamentalsComponent } from './angular-fundamentals/angular-fundamentals.component';

export const routes: Routes = [
  {path: '', component: HomeComponent, title: 'Home Page'},
  {path: 'typescript', component: TypescriptNotesComponent, title: 'TypeScript Notes'},
  {path: 'angular-fundamentals', component: AngularFundamentalsComponent, title: 'TypeScript Notes'},

];
