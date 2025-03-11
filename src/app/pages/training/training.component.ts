import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  styleUrls: ['./training.component.scss'],
})
export class TrainingComponent implements OnInit {
  courses: any[] = [];
  form: FormGroup;



  
  private toastr: ToastrService = inject(ToastrService)
  constructor(
    private apiService: ApiService,
    private modalService: NgbModal,
   
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      course_id: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      portfolio_link: [''],
      message: ['']
    });
  }

  ngOnInit(): void {
    this.getCourseList();
  }

  getCourseList(): void {
    this.apiService.get('api/courses').subscribe({
      next: (res) => {
        this.courses = res.courses;
      },
      error: (error) => {
        console.error('Error fetching courses:', error);
      }
    });
  }

  openModal(content: any): void {
    this.modalService.open(content, { size: 'lg' });
  }

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }

    this.apiService.post('api/applycourses', this.form.value).subscribe({
      next: () => {
        this.modalService.dismissAll();
        this.toastr.success('You have Successfully Applied!');
      },
      error: (error) => {
        console.error('Error:', error);
        this.toastr.error('Something went wrong');
      }
    });
  }
  
}
