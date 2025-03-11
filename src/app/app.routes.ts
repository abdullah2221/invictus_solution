import { Routes } from '@angular/router';
import { provideRouter, withComponentInputBinding, withRouterConfig } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PortfolioComponent} from "./pages/portfolio/portfolio.component";
import { ServicesComponent } from './pages/services/services.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
 import { ServicedetailComponent } from './pages/servicedetail/servicedetail.component';
import { PortfoliodetailComponent } from './pages/portfoliodetail/portfoliodetail.component';
import { BlogdetailComponent } from './pages/blogdetail/blogdetail.component';
import { TrainingComponent } from './pages/training/training.component';
import { CareerComponent } from './pages/career/career.component';
// import { CareerPostComponent } from './career-post/career-post.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'careers', component: CareerComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'service-detail', component: ServicedetailComponent },
  { path: 'portfolio-detail', component: PortfoliodetailComponent },
  { path: 'blog-detail', component: BlogdetailComponent },
  { path: 'trainings', component: TrainingComponent },
//   { path: 'postjob', component: CareerPostComponent },
];


