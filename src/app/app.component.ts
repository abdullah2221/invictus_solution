import { Component, HostListener, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';
import { ViewportScroller } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [NgxSpinnerModule, RouterModule, HeaderComponent, FooterComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Invictus Solutions';
  pageYOffset = 0;

  constructor(
    private spinner: NgxSpinnerService, 
    private scroll: ViewportScroller,
    @Inject(PLATFORM_ID) private platformId: object // Injecting platform check
  ) {}

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (isPlatformBrowser(this.platformId) && typeof window !== 'undefined') {
      this.pageYOffset = window.pageYOffset;
    }
  }

  scrollToTop(): void {
    this.scroll.scrollToPosition([0, 0]);
  }

  async ngOnInit(): Promise<void> {
    if (isPlatformBrowser(this.platformId)) {
      // Lazy load AOS to prevent hydration issues
      const Aos = await import('aos');
      Aos.default.init({ once: true });

      // Prevent hydration issues with spinner
      setTimeout(() => {
        this.spinner.show();
        setTimeout(() => {
          this.spinner.hide();
        }, 1000);
      }, 0);
    }
  }
}
