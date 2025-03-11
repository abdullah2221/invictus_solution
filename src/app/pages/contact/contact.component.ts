import { Component, OnInit, inject, signal } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

import { ContactService } from '../../services/contact.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  imports: [ReactiveFormsModule, CommonModule],
  styleUrls: ['./contact.component.scss'],

})
export class ContactComponent implements OnInit {
  FormData!: FormGroup;
  errors = signal<any>(null);
  res = signal<any>(null);
  sentemail = signal<any>(null);
  positive = signal<string | null>(null);
  alertmessage = signal<boolean>(false);

  private builder = inject(FormBuilder);
  private contact = inject(ContactService);




  title = 'Contact Us';
  subtitle = 'Need custom software? Let\'s start with a free quote!';
  imageSrc = 'assets/images/wave.png';

  ngOnInit() {
    this.FormData = this.builder.group({
      name: new FormControl('', [Validators.required]),
      subject: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(FormData: FormGroup) {
    if (FormData.invalid) {
      return;
    }

    console.log(FormData.value);

    // Using new subscribe syntax
    this.contact.PostMessage(FormData.value).subscribe({
      next: (response: any) => {
        this.sentemail.set(response);
        try {
          this.positive.set(JSON.parse(this.sentemail()).message);
        } catch (error) {
          console.error('Error parsing response:', error);
        }
        this.alertmessage.set(true);

        // Reset form after success
        this.FormData.reset();
        setTimeout(() => {
          this.alertmessage.set(false);
        }, 5000);
        this.res.set([]);
      },
      error: (error) => {
        console.error('Error:', error);
        this.errors.set(error.error);
        try {
          this.res.set(JSON.parse(this.errors()).validation);
        } catch (error) {
          console.error('Error parsing validation errors:', error);
        }
      },
    });
  }
}
