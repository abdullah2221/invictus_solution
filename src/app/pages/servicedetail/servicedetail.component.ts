import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import services from './services_detail.json';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-servicedetail',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './servicedetail.component.html',
  styleUrl: './servicedetail.component.scss'
})
export class ServicedetailComponent {
  ServicesDetails = services
  service: any;
  constructor(private activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    let productIdFromRoute = this.activatedRouter.snapshot.queryParams["slug"];
    this.service = this.ServicesDetails.find((service: any) => service.slug === productIdFromRoute);
    console.log(this.service)
  }
}
