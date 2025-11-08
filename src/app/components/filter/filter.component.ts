import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface FilterOptions {
  minPrice: number
  maxPrice: number
  province: string
  city: string
  roomType: string
  
  searchQuery: string
}

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
    @Output() filtersChanged = new EventEmitter<FilterOptions>()

  isFilterOpen = false

  provinces = ["Gauteng", "Western Cape", "KwaZulu-Natal", "Eastern Cape", "Free State", "Limpopo"]
  cities = ["Johannesburg", "Pretoria", "Cape Town", "Durban", "Port Elizabeth", "Bloemfontein"]
  roomTypes = ["Backroom", "Flat", "House", "Apartment", "Studio", "Cottage"]

  priceMin = 0
  priceMax = 10000

  filters: FilterOptions = {
    searchQuery: "",
    minPrice: 700,
    maxPrice: 6200,
    province: "",
    city: "",
    roomType: "",
  }

  toggleFilter() {
    this.isFilterOpen = !this.isFilterOpen
  }

  closeFilter() {
    this.isFilterOpen = false
  }

  clearAllFilters() {
    this.filters = {
      searchQuery: "",
      minPrice: this.priceMin,
      maxPrice: this.priceMax,
      province: "",
      city: "",
      roomType: "",
    }
    this.emitFilters()
  }

  applyFilters() {
    this.emitFilters()
    this.closeFilter()
  }

  emitFilters() {
    this.filtersChanged.emit(this.filters)
    console.log("[Filter] Sent filters:", this.filters)
  }

  onMinPriceChange(event: Event) {
    const value = Number.parseInt((event.target as HTMLInputElement).value)
    if (value <= this.filters.maxPrice) {
      this.filters.minPrice = value
    }
  }

  onMaxPriceChange(event: Event) {
    const value = Number.parseInt((event.target as HTMLInputElement).value)
    if (value >= this.filters.minPrice) {
      this.filters.maxPrice = value
    }
  }

  getMinPricePercentage(): number {
    return ((this.filters.minPrice - this.priceMin) / (this.priceMax - this.priceMin)) * 100
  }

  getMaxPricePercentage(): number {
    return ((this.filters.maxPrice - this.priceMin) / (this.priceMax - this.priceMin)) * 100
  }
}
