// document-rating.component.ts
import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-document-rating',
  standalone: true,
  imports: [NgFor],
  template: `
    <div class="rating-container">
      <h2>Rate this document</h2>
      <div class="stars">
        <span *ngFor="let star of [1, 2, 3, 4, 5]" 
              (click)="rate(star)" 
              [class.filled]="star <= rating">
          ★
        </span>
      </div>
      <p>Your rating: {{ rating }} / 5</p>
    </div>
  `,
  styles: [`
    .rating-container {
      background-color: #f0f0f0;
      border-radius: 8px;
      padding: 20px;
      text-align: center;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .stars {
      font-size: 24px;
      color: #ddd;
      cursor: pointer;
    }
    .stars span {
      transition: color 0.2s;
    }
    .stars span:hover,
    .stars span.filled {
      color: #ffd700;
    }
  `]
})
export class DocumentRatingComponent {
  @Input() documentId: string;
  rating: number = 0;

  rate(star: number) {
    this.rating = star;
    // Here you would typically call a service to save the rating
    console.log(`Document ${this.documentId} rated ${this.rating} stars`);
  }
}