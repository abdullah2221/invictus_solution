import { Component } from '@angular/core';
import blogs from '../blogdetail/blog_detail.json';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [ReactiveFormsModule,RouterModule,CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  BlogDetails = blogs

  stripHtml(html: string): string {
    return html.replace(/<[^>]*>/g, ''); // Removes all HTML tags
  }
  

}