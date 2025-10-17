<<<<<<< Updated upstream
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
=======
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // Added CommonModule

@Component({
  selector: 'app-footer',
  standalone: true, // Added standalone: true
  imports: [CommonModule], // Added imports array with CommonModule
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  // Input to control whether full links are shown
  @Input() showFullLinks: boolean = true;
  // Input to control whether footer content is centered
  @Input() centerContent: boolean = false;
}
>>>>>>> Stashed changes
