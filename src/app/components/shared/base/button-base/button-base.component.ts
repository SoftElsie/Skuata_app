import { Component } from '@angular/core';


// button-base.ts
export abstract class ButtonBaseComponent {
 loading = false;
  loadingButton: string | null = null;

  protected startLoading(action: string) {
    this.loading = true;
    this.loadingButton = action;
  }

  protected stopLoading() {
    this.loading = false;
    this.loadingButton = null;
  }

  protected runWithLoader(action: string, fn: () => void) {
    if (this.loading) return;
    this.startLoading(action);

    setTimeout(() => {   // allows Angular to render loader
      fn();
      this.stopLoading();
    });
  }
}