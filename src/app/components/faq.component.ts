// faq.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FAQ {
  question: string;
  answer: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="max-w-2xl mx-auto p-4">
      <h1 class="text-3xl font-bold mb-6 text-center">Your Questions, Answered!</h1>
      <div *ngFor="let faq of faqs" class="mb-4 bg-white rounded-lg shadow-sm overflow-hidden">
        <button
          (click)="faq.isOpen = !faq.isOpen"
          class="w-full p-4 text-left flex justify-between items-center"
        >
          <span class="text-lg font-semibold">{{ faq.question }}</span>
          <span class="text-xl">{{ faq.isOpen ? '▲' : '▼' }}</span>
        </button>
        <div *ngIf="faq.isOpen" class="p-4 bg-gray-50">
          {{ faq.answer }}
        </div>
      </div>
    </div>
  `,
  styles: [`
    /* You can add any additional styles here */
  `]
})
export class FAQComponent {
  faqs: FAQ[] = [
    {
      question: "What is Share2Teach?",
      answer: "A vibrant platform for sharing educational resources!",
      isOpen: false
    },
    {
      question: "How do I create an account?",
      answer: "To create an account, click on the 'Sign Up' button in the top right corner of the homepage. Fill in your details, including your email address and a strong password. Verify your email, and you're ready to go!",
      isOpen: false
    },
    {
      question: "Can I upload my own files?",
      answer: "Yes, you can upload your own educational resources once you have an account. Go to your dashboard and click on the 'Upload' button to share your materials with the community.",
      isOpen: false
    },
    {
      question: "What types of files can I share?",
      answer: "Share2Teach supports a wide range of file formats, including PDFs, Word documents, PowerPoint presentations, images, and video files. Please ensure all shared content is educational and appropriate.",
      isOpen: false
    },
    {
      question: "How can I find resources on specific topics?",
      answer: "Use the search bar at the top of the page to look for specific topics. You can also browse by subject categories or use advanced filters to narrow down your search.",
      isOpen: false
    }
  ];
}