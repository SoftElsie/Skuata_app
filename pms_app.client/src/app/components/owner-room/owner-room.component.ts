import { Component } from '@angular/core';
import { FilterOptions } from '../shared/widgets/filter/filter.component';
interface Property {
  id: number;
  image: string;
  title: string;
  address: string;
  price: number;
  views: number;
  isFavorite: boolean;
  availability: "available" | "unavailable"

}
@Component({
  selector: 'app-owner-room',
  standalone: false,
  templateUrl: './owner-room.component.html',
  styleUrls: ['./owner-room.component.css']
})
export class OwnerRoomComponent {
  searchQuery = '';
  visibleProperties: Property[] = [] 
   filteredProperties: Property[] = [];
  itemsPerPage = 6              
  currentPage = 1   


   properties: Property[] = [
      {
        id: 1,
        title: "Backroom",
        image: "assets/images/image-card-3.png",
        address: "16 Leyds Street, Sunnyside, Gauteng...",
        price: 1500,
        availability: "available",
        views: 18,
        isFavorite: false,
      },
      {
        id: 2,
        title: "Backroom",
        image: "assets/images/image-card-2.png",
        address: "16 Leyds Street, Sunnyside, Gauteng...",
        price: 3500,
        availability: "unavailable",
        views: 18,
        isFavorite: false,
      },
      {
        id: 3,
        title: "Backroom",
        image: "assets/images/image-card-3.png",
        address: "16 Leyds Street, Sunnyside, Gauteng...",
        price: 4000,
        availability: "available",
        views: 18,
        isFavorite: false,
      },
      {
        id: 4,
        title: "Backroom",
        image: "assets/images/image-card-2.png",
        address: "16 Leyds Street, Sunnyside, Gauteng...",
        price: 1500,
        availability: "unavailable",
        views: 18,
        isFavorite: false,
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
  toggleActive(property: any) {
  property.active = !property.active;
  console.log(`${property.title} is now ${property.active ? 'active' : 'inactive'}`);
}

  }
  