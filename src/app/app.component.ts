import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardModule } from 'primeng/card';
import { FAQComponent } from './components/faq.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , CardModule,FAQComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  template: `
    <main>
      <!-- Your existing content -->
      <app-faq></app-faq>
      <!-- More content if needed -->
    </main>
  `,
  styles: [],
})
export class AppComponent {
  title = 'Share2Teach';
}
