// user-analytics.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-analytics',
  standalone: true,
  template: `
    <div class="analytics-container">
      <h2>User Analytics</h2>
      <div class="metric">
        <h3>Total Users</h3>
        <p class="value">{{ totalUsers }}</p>
      </div>
      <div class="metric">
        <h3>Active Users (Last 30 days)</h3>
        <p class="value">{{ activeUsers }}</p>
      </div>
      <div class="metric">
        <h3>Documents Uploaded</h3>
        <p class="value">{{ documentsUploaded }}</p>
      </div>
      <div class="metric">
        <h3>Average Document Rating</h3>
        <p class="value">{{ averageRating.toFixed(1) }} / 5</p>
      </div>
    </div>
  `,
  styles: [`
    .analytics-container {
      background-color: #ffffff;
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .metric {
      margin-bottom: 20px;
    }
    h2 {
      color: #333;
      border-bottom: 2px solid #eee;
      padding-bottom: 10px;
    }
    h3 {
      color: #666;
      margin-bottom: 5px;
    }
    .value {
      font-size: 24px;
      font-weight: bold;
      color: #007bff;
    }
  `]
})
export class UserAnalyticsComponent implements OnInit {
  totalUsers: number = 0;
  activeUsers: number = 0;
  documentsUploaded: number = 0;
  averageRating: number = 0;

  ngOnInit() {
    // Here you would typically fetch this data from a service
    this.totalUsers = 1000;
    this.activeUsers = 750;
    this.documentsUploaded = 5000;
    this.averageRating = 4.2;
  }
}