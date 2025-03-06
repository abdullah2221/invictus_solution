import { Component, signal, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { QouteService } from '../../services/qoute.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  private builder = inject(FormBuilder);
  private qoute = inject(QouteService);

  FormData: FormGroup = this.builder.nonNullable.group({
    email: ['', [Validators.required, Validators.email]]
  });

  errors = signal<string | null>(null);
  res = signal<string[]>([]);
  sentemail = signal<string | null>(null);
  positive = signal<string | null>(null);
  alertmessage = signal(false);

  projects = [
    {
      id: 1,
      img: 'assets/images/portfolio/storebay-thumb.jpg',
      url: 'https://www.thestorebay.com/',
      title: 'Storebay',
      description: 'Storebay is a comprehensive warehouse management system that streamlines the process from production to storage and dispatch, providing an end-to-end solution for efficient inventory management and order fulfillment.'
    },
    {
      id: 2,
      img: 'assets/images/portfolio/image001.jpg',
      url: 'https://taptailor.co/',
      title: 'Tap Tailor',
      description: 'A completed custom stitching solution. Where you have to choose stitching style and fabric, complete stitched dress will be at your doorstep.'
    },
    {
      id: 3,
      img: 'assets/images/portfolio/image003.jpg',
      url: null,
      title: 'TecHealth',
      description: 'We are in the matter of advanced change. To just enable our customers to meet their Health today with interesting articles, info graphics, videos, and images.'
    },
    {
      id: 4,
      img: 'assets/images/portfolio/image005.jpg',
      url: 'http://vendi.pk/',
      title: 'Vendi',
      description: 'Vendi helps you streamline your distribution network, making the process more efficient to helps you tracking the Goods Inventory.'
    },
    {
      id: 5,
      img: 'assets/images/portfolio/image007.jpg',
      url: 'https://hrconnect.pk/',
      title: 'HR Connect',
      description: 'HR Connect is the all-in-one HR Suite built for local businesses, you can handle, from onboarding to offboarding and everything in between, manage, and pay employees with one easy-to-use software.'
    },
    {
      id: 6,
      img: 'assets/images/portfolio/image009.jpg',
      url: 'https://meridukaan.pk/',
      title: 'Meri Dukaan',
      description: 'Meri Dukaan is mobile based POS ,credit book, Order booking, Ecommerce store for retail sector. Meri Dukaan is Designed by keeping its user in mind in both English and Urdu language'
    },
    {
      id: 7,
      img: 'assets/images/portfolio/image011.jpg',
      url: 'https://nictusthemes.com/',
      title: 'Nictus',
      description: 'Nictus is a multi-vendor ecommerce business solution. Advance Content Management System, Ecommerce Mobile Applications for Customer, Seller, and Delivery. (Android, iOS, Flutter)'
    },
    {
      id: 8,
      img: 'assets/images/portfolio/image013.jpg',
      url: 'http://invictuspos.com/',
      title: 'Invictus POS',
      description: 'Take your business to the next gen, Because every business is different, Invictus POS has a variety of options to help you take yours where you want it to go.'
    },
    {
      id: 9,
      img: 'assets/images/portfolio/image017.jpg',
      url: 'https://schooly.softwaresbranding.com/',
      title: 'Schooly',
      description: 'Schooly is a ACL Based, Organized Features, Unlimited Language, Exclusive Reports and Secure web based Multi School Management System with 24/7 support'
    },
    {
      id: 10,
      img: 'assets/images/portfolio/image015.jpg',
      url: null,
      title: 'Remind Me',
      description: 'As its name shows it’s a reminder app. You can set a time to remind. Then by ringing and notification you will be informed about your saved information.'
    },
    {
      id: 11,
      img: 'assets/images/portfolio/ERP.jpg',
      url: null,
      title: 'Enterprise Resource Planner (ERP)',
      description: 'Development Technology Used "ANGULAR / ASP .NET / SQL SERVER / CORE"'
    },
    {
      id: 12,
      img: 'assets/images/portfolio/hospitalmanagment.jpg',
      url: null,
      title: 'Hospital Management System',
      description: 'Development Technology used "ASP .NET || MVC || SQL SERVER"'
    },
    {
      id: 13,
      img: 'assets/images/portfolio/andriodgames.png',
      url: null,
      title: 'Android Games',
      description: 'Development technology used: ANDROID STUDIO || UNITY'
    },
    {
      id: 14,
      img: 'assets/images/portfolio/taskmanagemnt.jpg',
      url: null,
      title: 'Task Management System',
      description: 'Development Technology Used "PHP || MYSQL "'
    },
    {
      id: 15,
      img: 'assets/images/portfolio/customermangemnt.png',
      url: null,
      title: 'Customer Relationship Management',
      description: 'Development Technology used Laravel & MySQL'
    }
  ];

  onSubmit() {
    if (this.FormData.invalid) return; // Stop API request if form is invalid

    this.qoute.PostMessage(this.FormData.value).subscribe({
      next: (response) => {
        this.sentemail.set(response);
        this.alertmessage.set(true);

        try {
          const jsonResponse = JSON.parse(this.sentemail() || '{}'); // Default to an empty object if null
          this.positive.set(jsonResponse.message || 'Your request has been sent successfully!');
        } catch (error) {
          console.error('Invalid JSON response:', error);
          this.positive.set('Your request has been sent successfully!');
        }

        // Reset form after submission & hide alert after 5 seconds
        this.FormData.reset();
        setTimeout(() => this.alertmessage.set(false), 5000);
      },
      error: (error) => {
        this.errors.set(error.error);

        try {
          const parsedErrors = JSON.parse(this.errors() || '{}');
          this.res.set(Array.isArray(parsedErrors.validation) ? parsedErrors.validation : []);
        } catch (err) {
          console.error('Invalid JSON error response:', err);
        }
      }
    });
  }
}
