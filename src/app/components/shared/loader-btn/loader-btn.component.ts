import { Component } from '@angular/core';

@Component({
  selector: 'app-loader-btn',
  templateUrl: './loader-btn.component.html',
  styleUrl: './loader-btn.component.css'
})
export class LoaderBtnComponent {
isLoading = false;

  handleLoadMore() {
    this.isLoading = true;
    console.log('Loading started');

    // Simulate loading delay (replace with your logic)
    setTimeout(() => {
      console.log('Loading finished');
      this.isLoading = false;
    }, 2000); // 2-second delay
  }
}
