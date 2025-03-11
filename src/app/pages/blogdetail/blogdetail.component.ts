import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import blogs from './blog_detail.json';

@Component({
  selector: 'app-blogdetail',
  standalone: true,
  templateUrl: './blogdetail.component.html',
  styleUrl: './blogdetail.component.scss'
})
export class BlogdetailComponent {
  BlogDetails: any = blogs;
  blog: any;

  constructor(private activatedRouter: ActivatedRoute) {
    this.activatedRouter.queryParams.subscribe(params => {
      const productIdFromRoute = params["slug"];
      this.blog = this.BlogDetails.find((service: any) => service.slug === productIdFromRoute);
    });
  }
}
