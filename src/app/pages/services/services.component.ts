import { Component } from '@angular/core';
import services from "../servicedetail/services_detail.json"
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  ServiceDetails: any[] = []; 

  
  ngOnInit() {
    this.ServiceDetails = services; // Ensure data is loaded before rendering
 
  
  }
}
