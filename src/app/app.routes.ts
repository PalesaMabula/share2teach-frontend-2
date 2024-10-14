import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { CardModule } from 'primeng/card';
import { FAQComponent } from './components/faq.component';
import { DocumentRatingComponent } from './components/document-rating';
import { UserAnalyticsComponent } from './components/user-analytics';
export const routes: Routes = [
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'home',
    component:HomeComponent

  }, 
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'faq',
    component:FAQComponent
  },
  { 
    path: 'document-rating', component: DocumentRatingComponent 
  },
  { 
    path: 'user-analytics', component: UserAnalyticsComponent
  },

];
