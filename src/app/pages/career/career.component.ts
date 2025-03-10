// career.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbAccordionModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../services/api.service';
import { Careers } from './career';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [
    ReactiveFormsModule, 
    CommonModule, 
    NgbAccordionModule,  
    ],
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {
  // careersList: any[] = []; // Initialize as an empty array
  careerInfo: Careers | null = null; // Initialize as null
  isHidden = 1;
  form: FormGroup;

  careersList = [
    {id:1, name: "Software Engineer", description: "Exciting role in software development." },
    {id:2, name: "UI/UX Designer", description: "Work on creative UI/UX designs." }
  ];

  constructor(
    private apiService: ApiService,
    private modalService: NgbModal,
    private toastr: ToastrService, // ToastrService is now provided globally
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]], // Add phone validation
      portfolio_link: ['', [Validators.required, Validators.pattern(/^(http|https):\/\/[^ "]+$/)]], // Validate URL
      message: ['']
    });
  }

  ngOnInit(): void {
    this.getCareerList();
  }

  getCareerList() {
    this.apiService.get('api/careers').subscribe(
      (res) => {
        this.careersList = res.careers || []; // Handle undefined response
      },
      (error) => {
        this.toastr.error('Failed to load careers.'); // Show error to user
        console.error('API Error: ', error);
      }
    );
  }

  open(content: any, data: any, source = 'all') {
    this.isHidden = source === 'jobs-listing' ? 0 : 1;
    this.careerInfo = data || null; // Handle undefined data
    this.modalService.open(content, { size: 'xl' });
  }

  onSubmit() {
    if (this.form.invalid || !this.careerInfo?.id) { // Check if careerInfo.id exists
      this.toastr.error('Invalid form or missing career ID.');
      return;
    }

    const formData = { ...this.form.value, career_id: this.careerInfo.id };
    this.apiService.post('api/applycareers', formData).subscribe(
      (res) => {
        this.modalService.dismissAll();
        this.toastr.success('Application submitted successfully!');
        this.form.reset(); // Reset the form
      },
      (error) => {
        this.toastr.error('Submission failed. Please try again.');
        console.error('Submission Error: ', error);
      }
    );
  }
}