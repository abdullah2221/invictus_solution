import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  ceoCards = [
    { id: 1, title: 'Trust Only The Power of Ideas', description: 'Ideas can come from anybody...', duration: '500' },
    { id: 2, title: 'Be comfortable with risks!', description: 'Pioneers are those who are never afraid...', duration: '800' },
    { id: 3, title: 'Culture breeds talent!', description: 'From visionaries to influencers...', duration: '1000' }
  ];

  missionList = [
    { id: 1, text: 'Valuation Services' },
    { id: 2, text: 'Development of Business Models' },
    { id: 3, text: 'Deal Structuring' },
    { id: 4, text: 'Feasibility Business Plans' }
  ];

  strategyImages = [
    { id: 1, src: 'Stratgy/circle1.png', animation: 'fade-left' },
    { id: 2, src: 'Stratgy/circle2.png', animation: 'fade-right' },
    { id: 3, src: 'Stratgy/circle3.png', animation: 'fade-left' },
    { id: 4, src: 'Layer79.png', animation: 'fade-right' },
    { id: 5, src: 'Layer77.png', animation: 'fade-down' },
    { id: 6, src: 'Layer78.png', animation: 'fade-right' }
  ];


// pending 

}
