import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.css'
})
export class StarRatingComponent {
  @Input() rating: number = 0; // Input float value
  stars: number[] = [];

  ngOnChanges() {
    // Generate stars array based on the rating
    const fullStars = Math.floor(this.rating);
    const hasHalfStar = this.rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    this.stars = [
      ...Array(fullStars).fill(1), // Full stars
      ...(hasHalfStar ? [0.5] : []), // Half star
      ...Array(emptyStars).fill(0) // Empty stars
    ];
  }
}
