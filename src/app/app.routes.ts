import { Routes } from '@angular/router';
import { provideRouter, withComponentInputBinding, withRouterConfig } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
// import { AboutComponent } from './about/about.component';
// import { BlogComponent } from './blog/blog.component';
// import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent} from "./pages/portfolio/portfolio.component";
// import { ServicesComponent } from './services/services.component';
// import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
// import { ServicedetailComponent } from './servicedetail/servicedetail.component';
// import { PortfoliodetailComponent } from './portfoliodetail/portfoliodetail.component';
// import { BlogdetailComponent } from './blogdetail/blogdetail.component';
// import { TrainingComponent } from './training/training.component';
// import { CareerComponent } from './career/career.component';
// import { CareerPostComponent } from './career-post/career-post.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
//   { path: 'about', component: AboutComponent },
//   { path: 'contact', component: ContactComponent },
//   { path: 'blog', component: BlogComponent },
  { path: 'portfolio', component: PortfolioComponent },
//   { path: 'services', component: ServicesComponent },
//   { path: 'careers', component: CareerComponent },
//   { path: 'privacy-policy', component: PrivacyPolicyComponent },
//   { path: 'service-detail', component: ServicedetailComponent },
//   { path: 'portfolio-detail', component: PortfoliodetailComponent },
//   { path: 'blog-detail', component: BlogdetailComponent },
//   { path: 'trainings', component: TrainingComponent },
//   { path: 'postjob', component: CareerPostComponent },
];


