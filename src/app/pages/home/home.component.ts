import { Component, OnInit } from '@angular/core';
import services from "../servicedetail/services_detail.json"
import blogs from '../blogdetail/blog_detail.json';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgxTypedWriterModule } from 'ngx-typed-writer';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone:true,
  imports:[RouterModule,CommonModule,NgxTypedWriterModule,ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit {
  title = 'angularTests';
  list: string[] = ['Meet Tomorrow Today'];
  ServiceDetails: any[] = []; 
  BlogDetails: any[] = []; 
  constructor() {}
  ngOnInit() {
    this.ServiceDetails = services; // Ensure data is loaded before rendering
    this.BlogDetails= blogs;
  
  }

}
