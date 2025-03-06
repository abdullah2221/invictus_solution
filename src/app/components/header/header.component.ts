import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports:[FormsModule,CommonModule,RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  navbarfixed: boolean = false;
  mobilenav: boolean = false;

  @HostListener('window:scroll',['$event']) onscroll(){
    if(window.scrollY > 100)
   {
     this.navbarfixed = true;
   }
   else
   {
     this.navbarfixed = false;
   }

  }
  openMenu(): void {
    this.mobilenav = !this.mobilenav;
  }
}
