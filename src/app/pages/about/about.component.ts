import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ReactiveFormsModule],
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


  affiliations = [
    {id:1, imgSrc: 'assets/images/fitco.jpg', isYellow: false },
    {id:2, imgSrc: 'assets/images/SIP-logo.jpg', isYellow: true },
    {id:3, imgSrc: 'assets/images/osfp-logo.jpg', isYellow: false },
    {id:4, imgSrc: 'assets/images/pseb-logo.jpg', isYellow: false },
    {id:5, imgSrc: 'assets/images/logo2.jpg', isYellow: true },
    {id:6, imgSrc: 'assets/images/pasha-logo.jpg', isYellow: false },
  ];



  valuesData = [
    { title: 'Innovation Obsession', description: 'Singular most essential tool to craft promising futures.' },
    { title: 'Collaborate To Create', description: 'The advantage of alliance that fuels mutual trust and productive, collaborative working relationships.' },
    { title: 'Show, Don\'t Tell', description: 'We are not here just to identify problems, we\'re here to address them.' },
    { title: 'Be Fast, Be First', description: 'Take small steps but make sure you are the first one to do so.' },
    { title: 'Growth Driven, Globally Oriented', description: 'Growing our people, markets, and businesses around the world.' },
    { title: 'Earn Trust', description: 'The integrity to do what\'s right.' },
    { title: 'Solutions Bias', description: 'We anticipate challenges that effectuate better outcomes and better decisions.' },
    { title: 'Our Business', description: 'What sets us apart is the simple belief that our solutions are not just operative in the present but are completely adaptable for the future.' }
  ];
  




// pending 

}
