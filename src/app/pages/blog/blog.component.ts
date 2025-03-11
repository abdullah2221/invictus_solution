import { Component } from '@angular/core';
import blogs from '../blogdetail/blog_detail.json';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [ReactiveFormsModule,RouterModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  BlogDetails = blogs

}
