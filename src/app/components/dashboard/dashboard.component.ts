import { Component } from '@angular/core';
import { FilterOptions } from '../filter/filter.component';

interface Property {
  id: number
  title: string
  image: string
  address: string
  price: number
  type: "Backroom" | "Flat" | "House"
  availability: "available" | "unavailable"
  availabilityDate?: string
  views: number
  roomIcon: string
  isFavorite: boolean
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
searchQuery = ""
  visibleProperties: Property[] = [] 
   filteredProperties: Property[] = [];
  itemsPerPage = 6              
  currentPage = 1   


  properties: Property[] = [
    {
      id: 1,
      title: "Backroom",
      image: "assets/images/image-card-1.png",
      address: "16 Leyds Street, Sunnyside, Gauteng...",
      price: 1500,
      type: "Backroom",
      availability: "available",
      availabilityDate: "15/10/25",
      views: 18,
      isFavorite: false,
      roomIcon:"assets/Icons/bed.png"

    },
    {
      id: 2,
      title: "Backroom",
      image: "assets/images/image-card-2.png",
      address: "16 Leyds Street, Sunnyside, Gauteng...",
      price: 3500,
      type: "Flat",
      availability: "unavailable",
      views: 18,
      isFavorite: false,
       roomIcon:"assets/Icons/building.png"
    },
    {
      id: 3,
      title: "Backroom",
      image: "assets/images/image-card-3.png",
      address: "16 Leyds Street, Sunnyside, Gauteng...",
      price: 4000,
      type: "House",
      availability: "available",
      availabilityDate: "15/10/25",
      views: 18,
      isFavorite: false,
       roomIcon:"assets/Icons/house.png"
    },
    {
      id: 4,
      title: "Backroom",
      image: "assets/images/image-card-1.png",
      address: "16 Leyds Street, Sunnyside, Gauteng...",
      price: 1500,
      type: "Backroom",
      availability: "unavailable",
      views: 18,
      isFavorite: false,
       roomIcon:"assets/Icons/bed.png"
    },
    {
      id: 5,
      title: "Backroom",
      image: "assets/images/image-card-2.png",
      address: "16 Leyds Street, Sunnyside, Gauteng...",
      price: 3500,
      type: "Backroom",
      availability: "available",
      availabilityDate: "15/10/25",
      views: 18,
      isFavorite: false,
       roomIcon:"assets/Icons/bed.png"
    },
    {
      id: 6,
      title: "Backroom",
      image: "assets/images/image-card-3.png",
      address: "16 Leyds Street, Sunnyside, Gauteng...",
      price: 4000,
      type: "Backroom",
      availability: "unavailable",
      views: 18,
      isFavorite: false,
       roomIcon:"assets/Icons/building.png"
    },
     {
      id: 7,
      title: "Backroom",
      image: "assets/images/image-card-1.png",
      address: "16 Leyds Street, Sunnyside, Gauteng...",
      price: 4000,
      type: "House",
      availability: "unavailable",
      views: 18,
      isFavorite: false,
       roomIcon:"assets/Icons/house.png"
    },
  ]

   ngOnInit(): void {
      this.filteredProperties = [...this.properties];
    this.loadProperties();
  }

 loadProperties(): void {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = this.currentPage * this.itemsPerPage;
    this.visibleProperties = this.filteredProperties.slice(start, end); 
  }
 loadMore(): void {
  const totalPages = Math.ceil(this.filteredProperties.length / this.itemsPerPage);
  if (this.currentPage < totalPages) {
    this.currentPage++;
    this.loadProperties();
  }
}



   loadPrevious(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadProperties();
    }
  }
  onSearch(): void {
    console.log("Searching for:", this.searchQuery)

  }

  onFilter(): void {
    console.log("Opening filter dialog")
    
  }

  onFiltersChanged(filters: FilterOptions) {
    console.log("[Dashboard] Received filters:", filters)

    let filtered = this.properties.filter(p => 
      p.price >= filters.minPrice &&
      p.price <= filters.maxPrice &&
      (filters.province ? p.address.includes(filters.province) : true) &&
      (filters.city ? p.address.includes(filters.city) : true) &&
      (filters.roomType ? p.type === filters.roomType : true) &&
      (filters.searchQuery ? p.address.toLowerCase().includes(filters.searchQuery.toLowerCase()) : true)
    )

    this.currentPage = 1
    this.visibleProperties = filtered.slice(0, this.itemsPerPage)

    console.log("[Dashboard] Filtered results:", this.visibleProperties)
  }

  toggleFavorite(property: Property): void {
    property.isFavorite = !property.isFavorite
  }

  viewDetails(property: Property): void {
    console.log("Viewing details for property:", property.id)
   
  }

}
