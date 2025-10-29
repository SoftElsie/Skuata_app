import { Component } from '@angular/core';
import { FilterOptions } from '../shared/widgets/filter/filter.component';
import { Router } from '@angular/router';

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
export class DashboardComponent{

  currentYear = new Date().getFullYear()
searchQuery = ""
  visibleProperties: Property[] = [] 
  filteredProperties: Property[] = [];
  itemsPerPage = 6              
  currentPage = 1   
loading = false;
loadingButton: string | null = null;

  properties: Property[] = [
    {
      id: 1,
      title: "Backroom",
      image: "assets/images/image-card-2.png",
      address: "16 Leyds Street, Sunnyside, Gauteng...",
      price: 1500,
      type: "Backroom",
      availability: "available",
      availabilityDate: "15/10/25",
      views: 18,
      isFavorite: false,
      roomIcon:"assets/icons/bed.png"

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
       roomIcon:"assets/icons/building.png"
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
       roomIcon:"assets/icons/house.png"
    },
    {
      id: 4,
      title: "Backroom",
      image: "assets/images/image-card-2.png",
      address: "16 Leyds Street, Sunnyside, Gauteng...",
      price: 1500,
      type: "Backroom",
      availability: "unavailable",
      views: 18,
      isFavorite: false,
       roomIcon:"assets/icons/bed.png"
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
       roomIcon:"assets/icons/bed.png"
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
       roomIcon:"assets/icons/building.png"
    },
     {
      id: 7,
      title: "Backroom",
      image: "assets/images/image-card-2.png",
      address: "16 Leyds Street, Sunnyside, Gauteng...",
      price: 4000,
      type: "House",
      availability: "unavailable",
      views: 18,
      isFavorite: false,
       roomIcon:"assets/icons/house.png"
    },
  ]

  constructor( private router: Router) {}

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
  if (this.loading) return;

  this.loading = true;
  this.loadingButton = 'next';

  // yield to allow Angular to render spinner
  setTimeout(() => {
    const totalPages = Math.ceil(this.filteredProperties.length / this.itemsPerPage);
    if (this.currentPage < totalPages) {
      this.currentPage++;
      this.loadProperties();
    }

    this.loading = false;
    this.loadingButton = null;
  }, 800); // 0ms yields a frame
}

loadPrevious(): void {
  if (this.loading) return;

  this.loading = true;
  this.loadingButton = 'previous';

  setTimeout(() => {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadProperties();
    }

    this.loading = false;
    this.loadingButton = null;
  }, 800);
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

  viewDetails(): void {
    console.log("Viewing details for property:")
     this.router.navigate(['/app/view-details']);
   
  }

   socialIcons = [
    {
      name: "LinkedIn",
      icon: "assets/icons/linkedin.png",
    },
    {
      name: "Instagram",
      icon: "assets/icons/instagram.png",
    },
    {
      name: "Twitter",
      icon: "assets/icons/twitter.png",
    },
  ]

 

  legalLinks = ["Terms of Service", "Privacy Policy", "Cookie Settings"]

}
